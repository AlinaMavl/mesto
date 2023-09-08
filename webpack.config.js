// webpack.config.js
const path = require('path'); // подключаем path к конфигу вебпак
const HtmlWebpackPlugin = require('html-webpack-plugin'); // подключите плагин
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// module.exports — это синтаксис экспорта в Node.js
module.exports = {
  entry: { main: '/src/pages/index.js' },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
        publicPath: ''
  },
  mode: 'development',
  devServer: {
    static: path.resolve(__dirname, './dist'), // путь, куда "смотрит" режим разработчика
    compress: true, // это ускорит загрузку в режиме разработки
    port: 8080, // порт, чтобы открывать сайт по адресу localhost:8080, но можно поменять порт

    open: true // сайт будет открываться сам при запуске npm run dev
  },
  module: {
    rules: [ // rules — это массив правил
      // добавим в него объект правил для бабеля
      {
        // регулярное выражение, которое ищет все js файлы
        test: /\.js$/,
        // при обработке этих файлов нужно использовать babel-loader
        use: 'babel-loader',
        // исключает папку node_modules, файлы в ней обрабатывать не нужно
        exclude: '/node_modules/'
      },
      // добавили правило для обработки файлов
      {
        // регулярное выражение, которое ищет все файлы с такими расширениями
        test: /\.(png|svg|jpg|gif|woff(2)?|eot|ttf|otf)$/,
        type: 'asset/resource' //значение asset/resource позволяет переносить исходные файлы в конечную сборку в том же формате
      },
      {
        // применять это правило только к CSS-файлам
        test: /\.css$/,
        // при обработке этих файлов нужно использовать
        //  MiniCssExtractPlugin.loader и css-loader
        use: [MiniCssExtractPlugin.loader, {
          loader: 'css-loader',
          // добавьте объект options
          //Если вы используете директиву @import в css-файлах, после подключения postcss-loader, нужно изменить то, как подключается css-loader.
          //В конце css-loader необходимо передать опцию importLoaders со значением 1
          options: {
            importLoaders: 1
          } //Значение 1 говорит о том, что некоторые трансформации PostCSS нужно применить до css-loader
        },
          'postcss-loader'
        ]
      },
    ]
  },
  //Подключённый в начале файла HtmlWebpackPlugin — это класс, с помощью которого можно конструировать объекты.
   plugins: [
    new HtmlWebpackPlugin({
    template: './src/index.html' // путь к файлу index.html
  }),
    new CleanWebpackPlugin(), //Настраивать его не потребуется, достаточно вызвать
     new MiniCssExtractPlugin() // подключение плагина для объединения файлов
  ],
}
