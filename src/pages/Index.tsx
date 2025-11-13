import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

interface Product {
  id: number;
  name: string;
  description: string;
  currentStock: number;
  minStock: number;
  price: number;
  unit: string;
}

const initialProducts: Product[] = [
  {
    id: 1,
    name: 'Мука пшеничная',
    description: 'Высший сорт',
    currentStock: 150,
    minStock: 50,
    price: 45,
    unit: 'кг'
  },
  {
    id: 2,
    name: 'Дрожжи',
    description: 'Сухие активные',
    currentStock: 8,
    minStock: 5,
    price: 180,
    unit: 'кг'
  },
  {
    id: 3,
    name: 'Сахар',
    description: 'Кристаллический',
    currentStock: 45,
    minStock: 20,
    price: 55,
    unit: 'кг'
  },
  {
    id: 4,
    name: 'Масло сливочное',
    description: '82.5% жирности',
    currentStock: 12,
    minStock: 10,
    price: 680,
    unit: 'кг'
  },
  {
    id: 5,
    name: 'Яйца',
    description: 'Куриные С0',
    currentStock: 180,
    minStock: 100,
    price: 8,
    unit: 'шт'
  },
  {
    id: 6,
    name: 'Соль',
    description: 'Экстра',
    currentStock: 25,
    minStock: 10,
    price: 15,
    unit: 'кг'
  }
];

export default function Index() {
  const [products] = useState<Product[]>(initialProducts);

  const totalProducts = products.length;
  const inStockProducts = products.length;
  const totalValue = products.reduce((sum, p) => sum + (p.currentStock * p.price), 0);
  const avgStock = Math.round(products.reduce((sum, p) => sum + p.currentStock, 0) / products.length);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="mb-8 animate-fade-in">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-gradient-to-br from-primary to-purple-600 rounded-2xl shadow-lg">
              <Icon name="Package" className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-primary via-purple-600 to-blue-600 bg-clip-text text-transparent">
                Система учёта товаров
              </h1>
              <p className="text-muted-foreground mt-1">Управление складом в реальном времени</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-up bg-gradient-to-br from-white to-purple-50">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Всего товаров</CardTitle>
              <div className="p-2 bg-primary/10 rounded-lg">
                <Icon name="ShoppingCart" className="w-4 h-4 text-primary" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-primary">{totalProducts}</div>
              <p className="text-xs text-muted-foreground mt-1">позиций в каталоге</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-up bg-gradient-to-br from-white to-green-50" style={{ animationDelay: '0.1s' }}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">В наличии</CardTitle>
              <div className="p-2 bg-success/10 rounded-lg">
                <Icon name="CheckCircle" className="w-4 h-4 text-success" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-success">{inStockProducts}</div>
              <p className="text-xs text-muted-foreground mt-1">товаров доступно</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-up bg-gradient-to-br from-white to-blue-50" style={{ animationDelay: '0.2s' }}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Общая стоимость</CardTitle>
              <div className="p-2 bg-blue-500/10 rounded-lg">
                <Icon name="DollarSign" className="w-4 h-4 text-blue-600" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-blue-600">{totalValue.toLocaleString()} ₽</div>
              <p className="text-xs text-muted-foreground mt-1">запасов на складе</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-up bg-gradient-to-br from-white to-yellow-50" style={{ animationDelay: '0.3s' }}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Средний запас</CardTitle>
              <div className="p-2 bg-accent/10 rounded-lg">
                <Icon name="TrendingUp" className="w-4 h-4 text-accent" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-accent">{avgStock}</div>
              <p className="text-xs text-muted-foreground mt-1">единиц на товар</p>
            </CardContent>
          </Card>
        </div>

        <Card className="border-0 shadow-xl animate-fade-in">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-2xl font-bold">Товары</CardTitle>
              <Button className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 shadow-lg">
                <Icon name="Plus" className="w-4 h-4 mr-2" />
                Добавить товар
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="rounded-lg overflow-hidden border border-border/50">
              <Table>
                <TableHeader>
                  <TableRow className="bg-muted/50 hover:bg-muted/50">
                    <TableHead className="font-semibold">ID</TableHead>
                    <TableHead className="font-semibold">Название</TableHead>
                    <TableHead className="font-semibold">Описание</TableHead>
                    <TableHead className="font-semibold text-center">Текущий запас</TableHead>
                    <TableHead className="font-semibold text-center">Мин. запас</TableHead>
                    <TableHead className="font-semibold text-right">Цена</TableHead>
                    <TableHead className="font-semibold text-center">Статус</TableHead>
                    <TableHead className="font-semibold text-center">Действия</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {products.map((product, index) => (
                    <TableRow 
                      key={product.id} 
                      className="hover:bg-muted/30 transition-colors animate-fade-in"
                      style={{ animationDelay: `${index * 0.05}s` }}
                    >
                      <TableCell className="font-medium">{product.id}</TableCell>
                      <TableCell className="font-semibold">{product.name}</TableCell>
                      <TableCell className="text-blue-600">{product.description}</TableCell>
                      <TableCell className="text-center font-bold text-lg">
                        {product.currentStock} {product.unit}
                      </TableCell>
                      <TableCell className="text-center text-muted-foreground">
                        {product.minStock} {product.unit}
                      </TableCell>
                      <TableCell className="text-right font-bold text-orange-600">
                        {product.price} ₽
                      </TableCell>
                      <TableCell className="text-center">
                        <Badge 
                          className="bg-success hover:bg-success text-success-foreground font-semibold px-3 py-1 shadow-sm"
                        >
                          <Icon name="Check" className="w-3 h-3 mr-1" />
                          В наличии
                        </Badge>
                      </TableCell>
                      <TableCell className="text-center">
                        <Button 
                          variant="ghost" 
                          size="sm"
                          className="hover:bg-primary/10 hover:text-primary"
                        >
                          Списать
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
