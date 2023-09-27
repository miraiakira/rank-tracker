import { getServerSession } from 'next-auth';
import { authOptions } from './api/auth/[...nextauth]/route';
import LogoutLink from '@/components/LogoutLink';

export default async function Header() {
  const session = await getServerSession(authOptions);
  console.log(session);
  const user = session?.user;
  return (
    <header className="flex items-center justify-between my-4">
      <a
        href=""
        className="text-3xl font-bold text-transparent bg-gradient-to-r to-blue-600 from-indigo-900 bg-clip-text"
      >
        RankTracker
      </a>
      <div className="flex items-center gap-2 p-1 rounded-full bg-slate-300">
        <img
          src={user?.image}
          alt="profil image"
          className="h-12 rounded-full"
        />
        <div className="pr-4 leading-5">
          <h3 className="font-bold">{user?.name}</h3>
          <LogoutLink />
        </div>
      </div>
    </header>
  );
}
