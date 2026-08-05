#!/usr/bin/env node
/**
 * Crea y autoriza el administrador inicial en Supabase.
 * Ejecutar una sola vez desde un equipo seguro.
 * NO publicar SUPABASE_SECRET_KEY ni pegarla en index.html.
 */

const SUPABASE_URL = 'https://wgdhdetjcvxxubfcsdsl.supabase.co';
const ADMIN_EMAIL = 'luis.hernandez@cordillera.edu.ec';
const ADMIN_NAME = 'LUIS HERNANDEZ';
const ADMIN_PASSWORD = 'ADMIN2026';
const secret = process.env.SUPABASE_SECRET_KEY;

if (!secret) {
  console.error('Falta SUPABASE_SECRET_KEY. Use la clave sb_secret_... solo en este equipo seguro.');
  process.exit(1);
}

const headers = {
  apikey: secret,
  Authorization: `Bearer ${secret}`,
  'Content-Type': 'application/json'
};

async function request(url, options = {}) {
  const response = await fetch(url, options);
  const text = await response.text();
  let payload = null;
  try { payload = text ? JSON.parse(text) : null; } catch { payload = text; }
  if (!response.ok) {
    const error = new Error(payload?.msg || payload?.message || text || `HTTP ${response.status}`);
    error.status = response.status;
    error.payload = payload;
    throw error;
  }
  return payload;
}

async function findExistingUser() {
  const data = await request(`${SUPABASE_URL}/auth/v1/admin/users?page=1&per_page=1000`, { headers });
  const users = Array.isArray(data?.users) ? data.users : [];
  return users.find(user => String(user.email || '').toLowerCase() === ADMIN_EMAIL.toLowerCase()) || null;
}

async function createOrFindUser() {
  try {
    return await request(`${SUPABASE_URL}/auth/v1/admin/users`, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        email: ADMIN_EMAIL,
        password: ADMIN_PASSWORD,
        email_confirm: true,
        user_metadata: { name: ADMIN_NAME }
      })
    });
  } catch (error) {
    const existing = await findExistingUser();
    if (existing) return existing;
    throw error;
  }
}

async function authorizeProfile(userId) {
  const response = await fetch(`${SUPABASE_URL}/rest/v1/perfiles_admin?on_conflict=usuario_id`, {
    method: 'POST',
    headers: {
      ...headers,
      Prefer: 'resolution=merge-duplicates,return=representation'
    },
    body: JSON.stringify({
      usuario_id: userId,
      nombre: ADMIN_NAME,
      activo: true
    })
  });
  const text = await response.text();
  if (!response.ok) throw new Error(text || `HTTP ${response.status}`);
  return text ? JSON.parse(text) : null;
}

try {
  const user = await createOrFindUser();
  if (!user?.id) throw new Error('Supabase no devolvió el UUID del usuario.');
  await authorizeProfile(user.id);
  console.log('Administrador creado y autorizado correctamente.');
  console.log(`Usuario: ${ADMIN_NAME}`);
  console.log(`Correo: ${ADMIN_EMAIL}`);
  console.log(`UUID: ${user.id}`);
  console.log('Cambie la contraseña inicial después del primer acceso y elimine este archivo del repositorio público.');
} catch (error) {
  console.error('No se pudo crear el administrador:', error.message);
  process.exit(1);
}
