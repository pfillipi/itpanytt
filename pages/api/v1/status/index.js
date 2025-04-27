import database from "infra/database.js";

async function status(request, response) {
  const updatedAt = new Date().toISOString();

  const databaseVersionResult = await database.query("SHOW server_version;");
  const databaseVersionValue = databaseVersionResult.rows[0].server_version;

  // const dbVersionResult = await database.query("SHOW server_version;");
  // const dbMaxConnectionsResult = await database.query("SHOW max_connections;");
  // const dbUsedConnectionsResult = await database.query(`
  //   SELECT COUNT(*)::int
  //   FROM pg_stat_activity
  //   WHERE state = 'active';
  //   `);

  // const dbInfo = {
  //   version: dbVersionResult.rows[0].server_version,
  //   max_connections: parseInt(
  //     dbMaxConnectionsResult.rows[0].max_connections,
  //     10,
  //   ),
  //   used_connections: dbUsedConnectionsResult.rows[0].count,
  // };

  response.status(200).json({
    updated_at: updatedAt,
    dependencies: {
      database: {
        version: databaseVersionValue,
      },
    },
  });
}

export default status;
