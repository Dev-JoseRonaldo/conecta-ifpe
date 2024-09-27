// components/Header.tsx
export const Header = () => {
  return (
    <header className="flex items-center justify-between bg-green-600 p-4">
      <div className="text-lg text-white">Olá, Amanda!</div>
      <div className="flex space-x-4">
        <input type="text" placeholder="Procurar..." className="rounded-md p-2" />
        <div className="flex items-center space-x-4">
          <span className="text-white">Amanda Lins</span>
          <img src="/path-to-profile-image" alt="Profile" className="size-8 rounded-full" />
        </div>
      </div>
    </header>
  )
}
