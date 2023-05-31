# Web-calculator
Web前端计算器
<!DOCTYPE html>
<html>
<head>
    <title>计算器</title>
    <link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
这部分代码是HTML文档的基本结构，包含了`<html>`、`<head>`和`<body>`标签。在`<head>`标签中，设置了标题为"计算器"，并通过`<link>`标签引入了一个名为`style.css`的样式表。
  
<div class="calculator">
    <input type="text" id="display" readonly>
    <div class="buttons">

这部分代码定义了一个具有`calculator`类的`<div>`元素，用于包裹整个计算器。其中，`<input>`元素用于显示计算器的输入和结果，具有`display`作为id属性。另外，还有一个具有`buttons`类的`<div>`元素，用于容纳计算器的按钮。
      
<button onclick="clearDisplay()">C</button>
<button onclick="appendToDisplay('7')">7</button>
<button onclick="appendToDisplay('8')">8</button>
<button onclick="appendToDisplay('9')">9</button>
<button onclick="appendToDisplay('+')">+</button>
<button onclick="appendToDisplay('4')">4</button>
<button onclick="appendToDisplay('5')">5</button>
<button onclick="appendToDisplay('6')">6</button>
<button onclick="appendToDisplay('-')">-</button>
<button onclick="appendToDisplay('1')">1</button>
<button onclick="appendToDisplay('2')">2</button>
<button onclick="appendToDisplay('3')">3</button>
<button onclick="appendToDisplay('*')">*</button>
<button onclick="appendToDisplay('0')">0</button>
<button onclick="appendToDisplay('.')">.</button>
<button onclick="calculate()">=</button>
<button onclick="appendToDisplay('/')">/</button>

这部分代码定义了计算器的按钮，每个按钮通过`onclick`属性关联了相应的JavaScript函数。例如，当点击"C"按钮时，会调用`clearDisplay()`函数；点击数字按钮时，会调用`appendToDisplay()`函数并传递相应的参数。

</div>
</div>

这部分代码用于闭合之前定义的`<div>`元素。


<script src="script.js"></script>

这行代码通过`<script>`标签引入了一个名为`script.js`的JavaScript文件，该文件包含了计算器程序的逻辑代码。


</body>
</html>

这部分代码用于闭合HTML文档的`<body>`和`<html>`标签。
HTML是用于构建网页结构的标记语言，JavaScript用于处理网页的交互和逻辑，而CSS用于设置网页的样式。以上代码片段结合了这三种语言，实现了一个简单的计算器界面和功能。
      

.calculator {
    width: 200px;
    margin: 0 auto;
    text-align: center;
}

这部分代码定义了`.calculator`类的样式。它设置计算器的宽度为200像素，并通过`margin: 0 auto;`将计算器水平居中对齐。`text-align: center;`将内部内容居中对齐。

#display {
    width: 100%;
    height: 30px;
    margin-bottom: 10px;
    text-align: right;
}

这部分代码定义了`#display`的样式，`#display`是一个具有`display`作为id的元素，即计算器的显示器。它设置显示器的宽度为100%（与父元素宽度相同），高度为30像素。`margin-bottom: 10px;`为显示器的下边距添加了10像素的空间。`text-align: right;`将显示器的文本右对齐。


.buttons {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 5px;
}

这部分代码定义了`.buttons`类的样式。它使用`display: grid;`将按钮容器转换为网格布局。`grid-template-columns: repeat(4, 1fr);`定义了网格的列，重复4次`1fr`表示每列的宽度相等，平均分配可用空间。`grid-gap: 5px;`设置网格中每个单元格之间的间距为5像素。

button {
    width: 40px;
    height: 40px;
}

这部分代码定义了`button`元素的样式。它设置按钮的宽度和高度均为40像素，使得所有按钮具有相同的大小。

这些CSS样式用于设置计算器界面的外观和布局。`.calculator`类用于整个计算器容器，`#display`用于显示器，`.buttons`用于按钮容器，`button`用于每个按钮元素。
      
function appendToDisplay(value) {
    var display = document.getElementById("display");
    display.value += value;
}
这个函数`appendToDisplay`用于向显示器添加字符。它接受一个`value`参数，该参数是要添加到显示器的字符串。首先，通过`document.getElementById("display")`获取了具有id为"display"的元素（即显示器），然后将`value`追加到显示器的值之后。

function clearDisplay() {
    var display = document.getElementById("display");
    display.value = "";
}

这个函数`clearDisplay`用于清空显示器。它获取具有id为"display"的元素（即显示器），并将其值设置为空字符串，从而清空显示器的内容。

function calculate() {
    var display = document.getElementById("display");
    var expression = display.value;
    
    try {
        var result = eval(expression);
        display.value = result;
    } catch (error) {
        display.value = "错误";
    }
}
这个函数`calculate`用于执行计算操作。它首先获取具有id为"display"的元素（即显示器），并将其值存储在`expression`变量中。然后，使用`eval()`函数对表达式进行求值，并将结果存储在`result`变量中。如果求值过程中没有错误，将结果显示在显示器上；否则，将显示器的值设置为"错误"。

`eval()`函数用于动态求值表达式
