import DownloadButton from '@/components/DownloadButton/DownloadButton';
import MobileNavbar from '@/components/MobileNavbar/MobileNavbar';
import Profile from '@/components/Profile/Profile';
import Sidebar from '@/components/Sidebar/Sidebar';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between mx-auto p-0 sm:p-2">
      <MobileNavbar />
      <div className="container page-border">
        <div className="w-full grid gap-4 grid-cols-4 sm:grid-cols-6">
          <div className="col-span-4">
            <Profile />
          </div>

          <div className="col-span-4 sm:col-span-2">
            <DownloadButton />
            <Sidebar />
          </div>
        </div>
      </div>
    </main>
  );
}
