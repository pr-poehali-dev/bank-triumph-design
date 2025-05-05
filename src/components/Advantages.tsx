
import Icon from "@/components/ui/icon";

const Advantages = () => {
  const advantages = [
    {
      title: "Выгодные условия",
      description: "Лучшие процентные ставки на рынке и минимальные комиссии за обслуживание",
      icon: "Percent"
    },
    {
      title: "Безопасность",
      description: "Современные технологии защиты данных и многоуровневая аутентификация",
      icon: "ShieldCheck"
    },
    {
      title: "Цифровой банкинг",
      description: "Управление счетами онлайн 24/7 с помощью мобильного или веб-приложения",
      icon: "Smartphone"
    },
    {
      title: "Персональный подход",
      description: "Индивидуальные решения и персональный менеджер для каждого клиента",
      icon: "UserPlus"
    },
    {
      title: "Быстрое обслуживание",
      description: "Минимальное время ожидания и оперативное решение вопросов",
      icon: "Clock"
    },
    {
      title: "Широкая сеть отделений",
      description: "Банкоматы и офисы в удобных локациях по всей стране",
      icon: "MapPin"
    }
  ];

  return (
    <section id="advantages" className="py-16 bg-triumph-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Почему выбирают <span className="text-triumph-yellow">Триумф</span></h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Банк с безупречной репутацией и многолетним опытом работы на финансовом рынке
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <div key={index} className="flex items-start p-6 bg-triumph-gray rounded-lg hover:bg-triumph-gray/90 transition-all">
              <div className="mr-4 mt-1">
                <div className="w-12 h-12 bg-triumph-yellow rounded-full flex items-center justify-center">
                  <Icon name={advantage.icon} size={24} className="text-triumph-black" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-white">{advantage.title}</h3>
                <p className="text-gray-300">{advantage.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-triumph-yellow/10 p-8 rounded-lg border border-triumph-yellow/30">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-3/4 mb-6 md:mb-0">
              <h3 className="text-2xl font-bold text-white mb-2">Станьте клиентом банка Триумф сегодня!</h3>
              <p className="text-gray-300">
                Присоединяйтесь к тысячам довольных клиентов и откройте для себя мир современных финансовых услуг
              </p>
            </div>
            <div className="md:w-1/4 text-center">
              <div className="inline-flex items-center justify-center px-6 py-3 bg-triumph-yellow text-triumph-black font-semibold rounded-lg hover:bg-triumph-darkYellow cursor-pointer transition-colors">
                Оставить заявку
                <Icon name="ArrowRight" size={18} className="ml-2" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantages;
