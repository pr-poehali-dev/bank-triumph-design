
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      title: "Кредитование",
      description: "Выгодные процентные ставки и быстрое одобрение кредитов для физических и юридических лиц",
      icon: "CreditCard",
      link: "#"
    },
    {
      title: "Вклады и инвестиции",
      description: "Разместите деньги под высокий процент или инвестируйте в перспективные проекты",
      icon: "LineChart",
      link: "#"
    },
    {
      title: "Расчетные счета",
      description: "Удобное управление финансами для бизнеса с минимальными комиссиями",
      icon: "Wallet",
      link: "#"
    },
    {
      title: "Ипотека",
      description: "Решение жилищного вопроса с комфортными условиями и низкими ставками",
      icon: "Home",
      link: "#"
    }
  ];

  return (
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Наши <span className="text-triumph-yellow">услуги</span></h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Банк Триумф предлагает полный спектр финансовых услуг для решения любых задач
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="border-triumph-yellow/30 hover:border-triumph-yellow transition-all duration-300 hover:shadow-md group">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 bg-triumph-yellow/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-triumph-yellow transition-colors">
                  <Icon name={service.icon} size={24} className="text-triumph-yellow" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 mb-4">{service.description}</CardDescription>
                <Button variant="link" className="p-0 text-triumph-black hover:text-triumph-yellow">
                  Подробнее <Icon name="ArrowRight" size={16} className="ml-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button className="bg-triumph-black text-white hover:bg-triumph-gray">
            Все услуги <Icon name="ChevronRight" size={18} className="ml-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
