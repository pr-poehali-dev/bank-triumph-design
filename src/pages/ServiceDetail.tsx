
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

// Данные о услугах
const servicesData = {
  credit: {
    title: "Кредитование",
    description: "Выгодные кредиты для любых целей",
    fullDescription: "Банк Триумф предлагает широкую линейку кредитных продуктов для физических и юридических лиц. Наши кредиты отличаются выгодными процентными ставками, гибкими условиями и быстрым одобрением.",
    icon: "CreditCard",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
    features: [
      "Процентные ставки от 8.5% годовых",
      "Срок кредитования до 7 лет",
      "Сумма кредита до 5 млн рублей",
      "Без залога и поручителей",
      "Рассмотрение заявки за 1 день"
    ],
    products: [
      {
        name: "Потребительский кредит",
        rate: "от 9.5%",
        term: "до 5 лет",
        amount: "до 3 млн ₽"
      },
      {
        name: "Кредит для бизнеса",
        rate: "от 8.5%",
        term: "до 7 лет",
        amount: "до 30 млн ₽"
      },
      {
        name: "Рефинансирование",
        rate: "от 9.0%",
        term: "до 7 лет",
        amount: "до 5 млн ₽"
      }
    ],
    faqs: [
      {
        question: "Какие документы нужны для оформления кредита?",
        answer: "Для оформления кредита вам потребуется паспорт, СНИЛС, справка о доходах (2-НДФЛ или по форме банка). Для некоторых видов кредитов может потребоваться дополнительная документация."
      },
      {
        question: "Как быстро рассматривается заявка на кредит?",
        answer: "Стандартный срок рассмотрения заявки составляет 1-2 рабочих дня. При предоставлении полного пакета документов и положительном решении деньги поступают на счет в течение 24 часов."
      },
      {
        question: "Можно ли досрочно погасить кредит?",
        answer: "Да, вы можете погасить кредит досрочно в любое время без штрафов и комиссий. Это позволит вам сэкономить на процентах за пользование кредитом."
      }
    ]
  },
  investments: {
    title: "Вклады и инвестиции",
    description: "Увеличивайте свой капитал с нами",
    fullDescription: "Банк Триумф предлагает разнообразные инвестиционные решения, которые помогут сохранить и приумножить ваши сбережения. Выбирайте подходящие вам инструменты: от классических вкладов до современных инвестиционных продуктов.",
    icon: "LineChart",
    image: "https://images.unsplash.com/photo-1559526324-593bc073d938?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
    features: [
      "Вклады с доходностью до 12% годовых",
      "Инвестиционные продукты с повышенной доходностью",
      "Страхование вкладов в системе АСВ",
      "Возможность пополнения и частичного снятия",
      "Капитализация процентов"
    ],
    products: [
      {
        name: "Вклад «Триумфальный»",
        rate: "до 11%",
        term: "12-36 месяцев",
        amount: "от 50 000 ₽"
      },
      {
        name: "Накопительный счет",
        rate: "до 8%",
        term: "бессрочный",
        amount: "без ограничений"
      },
      {
        name: "Инвестиционный портфель",
        rate: "до 20%*",
        term: "от 1 года",
        amount: "от 100 000 ₽"
      }
    ],
    faqs: [
      {
        question: "Как открыть вклад в банке Триумф?",
        answer: "Вы можете открыть вклад в любом отделении банка, предъявив паспорт, или дистанционно через интернет-банк или мобильное приложение, если вы уже являетесь клиентом банка."
      },
      {
        question: "Застрахованы ли вклады в банке Триумф?",
        answer: "Да, все вклады в банке Триумф застрахованы в системе страхования вкладов АСВ в пределах 1,4 млн рублей, включая начисленные проценты."
      },
      {
        question: "Какие виды инвестиционных продуктов предлагает банк?",
        answer: "Банк предлагает различные инвестиционные продукты: ПИФы, индивидуальные инвестиционные счета (ИИС), структурные продукты, доверительное управление и другие."
      }
    ]
  },
  accounts: {
    title: "Расчетные счета",
    description: "Удобное управление финансами для бизнеса",
    fullDescription: "Банк Триумф предлагает выгодные условия обслуживания расчетных счетов для предпринимателей и юридических лиц. Минимальные комиссии, удобный интернет-банк и персональный менеджер сделают ведение бизнеса еще эффективнее.",
    icon: "Wallet",
    image: "https://images.unsplash.com/photo-1613843439331-2a430fbcd038?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
    features: [
      "Открытие счета за 1 день",
      "Выгодные тарифы на обслуживание",
      "Интеграция с 1С и бухгалтерскими системами",
      "Мгновенные платежи внутри банка",
      "Эквайринг и другие бизнес-сервисы"
    ],
    products: [
      {
        name: "Тариф «Стартовый»",
        rate: "0 ₽",
        term: "первые 3 месяца",
        amount: "5 платежей бесплатно"
      },
      {
        name: "Тариф «Бизнес»",
        rate: "1 990 ₽/мес",
        term: "бессрочно",
        amount: "50 платежей включено"
      },
      {
        name: "Тариф «Премиум»",
        rate: "4 990 ₽/мес",
        term: "бессрочно",
        amount: "безлимитные платежи"
      }
    ],
    faqs: [
      {
        question: "Как открыть расчетный счет для бизнеса?",
        answer: "Вы можете подать заявку на открытие счета онлайн на нашем сайте, после чего менеджер свяжется с вами для согласования времени визита в офис банка для подписания документов."
      },
      {
        question: "Какие документы нужны для открытия счета?",
        answer: "Для ИП: паспорт, свидетельство о регистрации ИП, ИНН. Для ООО: устав, свидетельство о регистрации, ИНН, ОГРН, документы о назначении руководителя."
      },
      {
        question: "Как работает интернет-банк для бизнеса?",
        answer: "Интернет-банк для бизнеса позволяет управлять счетами, создавать и отправлять платежные поручения, получать выписки, обмениваться документами с банком и контрагентами, а также пользоваться дополнительными сервисами."
      }
    ]
  },
  mortgage: {
    title: "Ипотека",
    description: "Решение жилищного вопроса с комфортными условиями",
    fullDescription: "Банк Триумф предлагает ипотечные программы с низкими ставками для покупки готового и строящегося жилья. Мы помогаем клиентам реализовать мечту о собственном доме на выгодных условиях.",
    icon: "Home",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
    features: [
      "Ставки от 6% годовых",
      "Срок кредитования до 30 лет",
      "Первоначальный взнос от 10%",
      "Учет материнского капитала",
      "Специальные программы с господдержкой"
    ],
    products: [
      {
        name: "Новостройка",
        rate: "от 6.5%",
        term: "до 30 лет",
        amount: "до 20 млн ₽"
      },
      {
        name: "Вторичное жилье",
        rate: "от 7.5%",
        term: "до 30 лет",
        amount: "до 20 млн ₽"
      },
      {
        name: "Семейная ипотека",
        rate: "от 6.0%",
        term: "до 30 лет",
        amount: "до 12 млн ₽"
      }
    ],
    faqs: [
      {
        question: "Какой первоначальный взнос требуется для ипотеки?",
        answer: "Минимальный первоначальный взнос составляет 10% от стоимости приобретаемого жилья. При взносе от 20% действуют более выгодные процентные ставки."
      },
      {
        question: "Можно ли использовать материнский капитал для первоначального взноса?",
        answer: "Да, вы можете использовать материнский капитал для первоначального взноса или для частичного досрочного погашения ипотечного кредита."
      },
      {
        question: "Как долго рассматривается заявка на ипотеку?",
        answer: "Срок рассмотрения заявки на ипотеку составляет от 1 до 5 рабочих дней в зависимости от сложности сделки и полноты предоставленных документов."
      }
    ]
  }
};

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const [service, setService] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Имитация загрузки данных с сервера
    setLoading(true);
    setTimeout(() => {
      if (serviceId && serviceId in servicesData) {
        setService(servicesData[serviceId as keyof typeof servicesData]);
      }
      setLoading(false);
    }, 500);
  }, [serviceId]);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <Icon name="Loader2" size={40} className="animate-spin mx-auto mb-4 text-triumph-yellow" />
            <p className="text-gray-600">Загрузка информации...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <Icon name="AlertTriangle" size={40} className="mx-auto mb-4 text-triumph-yellow" />
            <h2 className="text-2xl font-bold mb-2">Услуга не найдена</h2>
            <p className="text-gray-600 mb-4">К сожалению, запрашиваемая услуга не существует или была удалена.</p>
            <Button asChild>
              <Link to="/">Вернуться на главную</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-gray-50">
        {/* Hero section */}
        <section className="bg-triumph-black py-16 relative overflow-hidden">
          <div className="absolute inset-0 opacity-30">
            <img 
              src={service.image} 
              alt={service.title} 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-triumph-black via-triumph-black/90 to-triumph-black/40"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex items-center mb-4 text-triumph-yellow">
              <Link to="/" className="text-sm hover:underline">Главная</Link>
              <Icon name="ChevronRight" size={16} className="mx-2" />
              <Link to="/#services" className="text-sm hover:underline">Услуги</Link>
              <Icon name="ChevronRight" size={16} className="mx-2" />
              <span className="text-sm text-white">{service.title}</span>
            </div>
            
            <div className="max-w-3xl">
              <div className="w-16 h-16 bg-triumph-yellow rounded-full flex items-center justify-center mb-6">
                <Icon name={service.icon} size={32} className="text-triumph-black" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">{service.title}</h1>
              <p className="text-xl text-gray-300 mb-8">{service.fullDescription}</p>
              <Button 
                className="bg-triumph-yellow text-triumph-black hover:bg-triumph-darkYellow"
                size="lg"
              >
                <Link to="/apply">Подать заявку</Link>
                <Icon name="ArrowRight" size={16} className="ml-2" />
              </Button>
            </div>
          </div>
        </section>
        
        {/* Преимущества */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Преимущества</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {service.features.map((feature: string, index: number) => (
                <Card key={index} className="border-triumph-yellow/20 hover:shadow-md transition-shadow">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="w-10 h-10 rounded-full bg-triumph-yellow/10 flex items-center justify-center mb-4">
                      <span className="text-triumph-yellow font-bold">{index + 1}</span>
                    </div>
                    <p>{feature}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* Продукты */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Наши предложения</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {service.products.map((product: any, index: number) => (
                <Card key={index} className="border-triumph-yellow/20 hover:border-triumph-yellow transition-all hover:shadow-lg">
                  <CardHeader>
                    <CardTitle>{product.name}</CardTitle>
                    <CardDescription>{product.term}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <p className="text-3xl font-bold text-triumph-black mb-1">{product.rate}</p>
                      <p className="text-gray-600">Ставка</p>
                    </div>
                    <div className="mb-6">
                      <p className="text-xl font-semibold mb-1">{product.amount}</p>
                      <p className="text-gray-600">Сумма</p>
                    </div>
                    <Button className="w-full bg-triumph-black text-white hover:bg-triumph-gray">
                      Подробнее
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* FAQ */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold mb-8 text-center">Часто задаваемые вопросы</h2>
            <Accordion type="single" collapsible className="w-full">
              {service.faqs.map((faq: any, index: number) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left font-medium">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-gray-600">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
        
        {/* CTA */}
        <section className="py-12 bg-triumph-black">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="bg-triumph-yellow rounded-xl p-8 flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-2/3 mb-6 md:mb-0">
                <h3 className="text-2xl font-bold mb-2 text-triumph-black">Нужна консультация?</h3>
                <p className="text-triumph-gray mb-0">
                  Наши специалисты ответят на все ваши вопросы и помогут подобрать оптимальное решение
                </p>
              </div>
              <div>
                <Button 
                  className="bg-triumph-black text-white hover:bg-triumph-gray w-full md:w-auto" 
                  size="lg"
                  asChild
                >
                  <Link to="/apply">
                    Оставить заявку
                    <Icon name="ArrowRight" size={16} className="ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServiceDetail;
