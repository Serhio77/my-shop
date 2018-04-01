1 Сгенерирован модуль ProductsModule
2 Добавлена модель Product
3 Добавлен лист продуктов (компонент ProductsComponent)
4 Добавлен ProductListService для компонента ProductsComponent
5 При выборе продукта (click) появляются детали продукта (компонент ProductDetails) и подкрашивается выбраный продукт в листе
6 Для комуникации между ProductDetails и ProductsComponent используется ProductCommunicatorService
7 Добавленна Кнопка "Add product to Cart" в ProductDetails, которая дизеблится если продукта в наличии нет.
8 Добавлен input  в ProductDetails, который хайдится если продукта в наличии нет спомощью *ngIf
9 Сгенерирован модуль CartModule
10 Добавлена модель Order
11 Добавлен компонент CartItemComponent
12 Добавлен компонент CartListComponent, который использует CartItemComponent через @Input() директиву
13 

