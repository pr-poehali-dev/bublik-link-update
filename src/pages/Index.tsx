const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-cream-50 to-cream-100 relative overflow-hidden">
      {/* Декоративные плавающие элементы */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Большие круги */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-cream-200/30 rounded-full blur-sm animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-cream-300/20 rounded-full blur-md"></div>
        <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-cream-200/25 rounded-full blur-sm"></div>

        {/* Маленькие точки */}
        <div className="absolute top-1/3 left-1/3 w-3 h-3 bg-cream-400/40 rounded-full"></div>
        <div className="absolute top-1/4 right-1/3 w-2 h-2 bg-cream-300/50 rounded-full"></div>
        <div className="absolute bottom-1/3 right-1/4 w-4 h-4 bg-cream-200/35 rounded-full"></div>

        {/* Геометрические фигуры */}
        <div className="absolute top-16 right-16 w-16 h-16 border border-cream-300/20 rotate-45 rounded-sm"></div>
        <div className="absolute bottom-20 left-16 w-12 h-12 border-2 border-cream-200/15 rotate-12"></div>
      </div>

      {/* Текст в левом верхнем углу с декоративной рамкой */}
      <div className="absolute top-4 left-4 text-sm text-gray-600 bg-white/50 backdrop-blur-sm px-3 py-2 rounded-lg border border-cream-200/30 shadow-sm">
        окно для входа bublik87
      </div>

      {/* Центральный контент с декоративной подложкой */}
      <div className="text-center relative z-10">
        {/* Декоративная подложка */}
        <div className="absolute inset-0 -m-8 bg-white/40 backdrop-blur-sm rounded-2xl shadow-lg border border-cream-200/30 -z-10"></div>

        <a
          href="https://1bublik.space/?redir=140327"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl font-medium text-gray-800 hover:text-gray-600 transition-all duration-300 hover:underline decoration-2 underline-offset-4 hover:scale-105 inline-block px-4 py-2"
        >
          актуальный домен bublik87
        </a>
        <p className="text-sm text-gray-500 mt-2">( ссылка кликабельна )</p>

        {/* Декоративная линия под текстом */}
        <div className="mt-4 w-24 h-px bg-gradient-to-r from-transparent via-cream-300 to-transparent mx-auto"></div>
      </div>

      {/* Тонкий декоративный бордюр по краям */}
      <div className="absolute inset-0 border border-cream-200/20 pointer-events-none"></div>
    </div>
  );
};

export default Index;
