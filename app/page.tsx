import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs/server";
import { getRole } from "@/utils/roles";

export default async function Home() {
  const { userId } = await auth();
  const role = await getRole();

  console.log("✅ Giriş yapan userId:", userId);
  console.log("🎯 Rol:", role);

  // Giriş yapmış kullanıcı varsa, rolüne göre yönlendir
  if (userId && role) {
    return redirect(`/${role}`);
  }

  // Giriş yapılmamışsa, ana sayfa içeriğini göster
  return (
    <div className="flex items-center justify-center h-screen">
      <h1 className="text-2xl font-bold text-gray-800">
        🏠 Ana Sayfa – Giriş yapılmadı
      </h1>
    </div>
  );
}
