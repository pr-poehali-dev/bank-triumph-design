import { useState } from "react");
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import Icon from "@/components/ui/icon";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    // Имитация запроса на сервер
    setTimeout(() => {
      setLoading(false);
      // Демо-данные для входа
      if ((username === "demo" && password === "demo") || 
          (username === "User062025" && password === "Postavtepyat")) {
        navigate("/dashboard");
      } else {
        setError("Неверный логин или пароль");
      }
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <Card className="border-triumph-yellow/20 shadow-lg">
              <CardHeader className="text-center">
                <div className="mx-auto w-12 h-12 bg-triumph-yellow rounded-full flex items-center justify-center mb-4">
                  <Icon name="LockKeyhole" size={24} className="text-triumph-black" />
                </div>
                <CardTitle className="text-2xl">Вход в личный кабинет</CardTitle>
                <CardDescription>
                  Введите данные для доступа к вашим счетам
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleLogin} className="space-y-4">
                  {error && (
                    <div className="bg-red-50 text-red-600 p-3 rounded-md text-sm flex items-center">
                      <Icon name="AlertCircle" size={16} className="mr-2" />
                      {error}
                    </div>
                  )}
                   
                  <div className="space-y-2">
                    <Label htmlFor="username">Логин</Label>
                    <div className="relative">
                      <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                        <Icon name="User" size={16} />
                      </div>
                      <Input 
                        id="username"
                        type="text" 
                        placeholder="Введите ваш логин" 
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>
                   
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <Label htmlFor="password">Пароль</Label>
                      <a href="#" className="text-xs text-triumph-black font-medium hover:text-triumph-yellow">
                        Забыли пароль?
                      </a>
                    </div>
                    <div className="relative">
                      <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                        <Icon name="KeyRound" size={16} />
                      </div>
                      <Input 
                        id="password"
                        type="password" 
                        placeholder="Введите ваш пароль" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>
                   
                  <Button 
                    type="submit" 
                    className="w-full bg-triumph-yellow text-triumph-black hover:bg-triumph-darkYellow"
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <Icon name="Loader2" className="mr-2 animate-spin" size={16} />
                        Вход...
                      </>
                    ) : (
                      <>
                        <Icon name="LogIn" className="mr-2" size={16} />
                        Войти
                      </>
                    )}
                  </Button>
                   
                  <div className="text-center mt-4">
                    <p className="text-sm text-gray-600">
                      У вас нет учетной записи?{" "}
                      <a href="#" className="text-triumph-black font-medium hover:text-triumph-yellow">
                        Зарегистрироваться
                      </a>
                    </p>
                    <div className="text-xs mt-2 text-gray-500">
                      Для демо-входа используйте: 
                      <br />логин <strong>User062025</strong>, пароль <strong>Postavtepyat</strong>
                      <br />или логин <strong>demo</strong>, пароль <strong>demo</strong>
                    </div>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Login;