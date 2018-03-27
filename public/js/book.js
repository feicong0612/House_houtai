//定义取消按钮的点击事件
let $books = $(".books");
$books.on('click', '.btnCel', e => {
  let $tar = $(e.target);
  //让整个输入模块栏隐藏
  $tar.parent().parent().hide();
});

//定义添加按钮的点击事件
let $btnAdd = $('.btnAdd');
let $addBooks = $('.addBooks');
$btnAdd.click(() => {
  //让添加栏显示
  $addBooks.show();
});

//定义添加栏的确定按钮的点击事件
$addBooks.on('click', '.btnCon', e => {
  console.log('发送请求');
  let $tar = $(e.target);
  let id = $tar.parent().parent().find("[title='ISBN']").val();
  let bookName = $tar.parent().parent().find("[title='bookName']").val();
  let type = $tar.parent().parent().find("[title='type']").val();
  if (id !== '') {
    $.ajax({
      url: 'http://localhost:3000/insert',
      data: {'id': id, 'title': bookName, 'type': type},
      success: function(data) {
        console.log("请求成功");
        console.log("data:", data);
        location.href = 'http://localhost:3000/';
      },
      error: function() {
        console.log("请求失败");
      }
    });
  } else {
    alert('ISBN编号不能为空！');
  }

});

//定义修改按钮点击事件
let $updateBooks = $('.updateBooks');
let $list = $('.list');
$list.on('click', '.btnUpd', e => {
  e.preventDefault();
  let $tar = $(e.target);
  let $tr = $tar.parent().parent();
  let id = $tr.children('.id').html();
  let title = $tr.children('.title').html();
  let type = $tr.children('.type').html();
  $updateBooks.find("[title='ISBN']").html(id);
  $updateBooks.find("[title='bookName']").val(title);
  $updateBooks.find("[title='type']").val(type);
  $updateBooks.show();
});

//定义修改栏的确定按钮的点击事件
$updateBooks.on('click', '.btnCon', e => {
  console.log('发送请求');
  let $tar = $(e.target);
  let id = parseInt($tar.parent().parent().find("[title='ISBN']").html());
  let bookName = $tar.parent().parent().find("[title='bookName']").val();
  let type = $tar.parent().parent().find("[title='type']").val();
  //console.log(id, bookName, type);
  $.ajax({
    url: 'http://localhost:3000/update',
    data: {'id': id, 'title': bookName, 'type': type},
    success: function(data) {
      console.log("请求成功");
      console.log("data:", data);
      location.href = 'http://localhost:3000/';
    },
    error: function() {
      console.log("请求失败");
    }
  });
});

//定义删除按钮点击事件
$list.on('click', '.btnDel', e => {
  e.preventDefault();
  let $tar = $(e.target);
  let $tr = $tar.parent().parent();
  let id = parseInt($tr.children('.id').html());
  if (confirm('确定要删除吗？')) {
    $.ajax({
      url: 'http://localhost:3000/delete',
      data: {'id': id},
      success: function(data) {
        console.log("请求成功");
        console.log("data:", data);
        location.href = 'http://localhost:3000/';
      },
      error: function() {
        console.log("请求失败");
      }
    });
  }

});
