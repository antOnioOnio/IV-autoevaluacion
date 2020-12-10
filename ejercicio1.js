const { Etcd3 } = require('etcd3');
const client = new Etcd3();
 
(async () => {

 
  const psw = await client.get('contraseña').string();
  console.log('contraseña es:', psw);
 
  // const allFValues = await client.getAll().prefix('f').keys();
  // console.log('all our keys starting with "f":', allFValues);
 
  await client.delete().all();
})();