import { prismaClient } from 'db/client';

export default async function Home() {
  const data = await prismaClient.user.findMany()
  return (
    <div>
      {data.map(user => (
        <div key={user.id}>
          <h3>{user.username}</h3>
          <h4>{user.password}</h4>
        </div>
      ))}
    </div>
  );
}
