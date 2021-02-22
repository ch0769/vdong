(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{444:function(t,a,e){"use strict";e.r(a);var r=e(14),s=Object(r.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"hexo备份"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#hexo备份"}},[t._v("#")]),t._v(" hexo备份")]),t._v(" "),e("h2",{attrs:{id:"新建repository"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#新建repository"}},[t._v("#")]),t._v(" 新建repository")]),t._v(" "),e("p",[t._v("在Github下创建一个新的repository，取名为myblog。(与本地的Hexo源码文件夹同名即可)\n创建的时候最好为空，不要勾选创建README.md。\n")]),t._v(" "),e("h2",{attrs:{id:"创建仓库"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#创建仓库"}},[t._v("#")]),t._v(" 创建仓库")]),t._v(" "),e("p",[t._v("进入本地的Hexo文件夹(D:\\hexo\\blog\\myblog)，在这个地方使用git Bash here执行以下命令创建仓库")]),t._v(" "),e("h2",{attrs:{id:"创建-gitignore文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#创建-gitignore文件"}},[t._v("#")]),t._v(" 创建.gitignore文件")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("touch .gitignore\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("参考我的 .gitignore：（下面的文件不备份）\n.DS_Store\nThumbs.db\ndb.json\n"),e("em",[t._v(".log\nnode_modules/\npublic/\n.deploy")]),t._v("/")]),t._v(" "),e("h2",{attrs:{id:"提交hexo源码"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#提交hexo源码"}},[t._v("#")]),t._v(" 提交Hexo源码")]),t._v(" "),e("p",[t._v('git add .\ngit commit -m "添加hexo源码文件作为备份"')]),t._v(" "),e("h2",{attrs:{id:"删除远程库"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#删除远程库"}},[t._v("#")]),t._v(" 删除远程库")]),t._v(" "),e("p",[t._v("git remote rm origin")]),t._v(" "),e("h2",{attrs:{id:"添加远程-git-仓库"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#添加远程-git-仓库"}},[t._v("#")]),t._v(" 添加远程 Git 仓库")]),t._v(" "),e("p",[t._v("git remote add origin git@github.com:waimao8/myblog.git")]),t._v(" "),e("h2",{attrs:{id:"远程仓库合并到本地"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#远程仓库合并到本地"}},[t._v("#")]),t._v(" 远程仓库合并到本地")]),t._v(" "),e("p",[t._v("git pull --rebase origin master")]),t._v(" "),e("h2",{attrs:{id:"更新远程仓库"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#更新远程仓库"}},[t._v("#")]),t._v(" 更新远程仓库")]),t._v(" "),e("p",[t._v("git push -u origin master")]),t._v(" "),e("h1",{attrs:{id:"hexo备份还原"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#hexo备份还原"}},[t._v("#")]),t._v(" hexo备份还原")]),t._v(" "),e("p",[t._v("在任何一台电脑上，只需要git remote add origin git@github.com:waimao8/myblog.git,即可完成将Hexo源文件复制到本地")]),t._v(" "),e("p",[t._v("在本地编写完博客时，顺次执行实现三步骤，即可完成Hexo博客源文件更新同步")]),t._v(" "),e("h2",{attrs:{id:"提交hexo源码-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#提交hexo源码-2"}},[t._v("#")]),t._v(" 提交Hexo源码")]),t._v(" "),e("p",[t._v('git add .\ngit commit -m "添加hexo源码文件作为备份"')]),t._v(" "),e("h2",{attrs:{id:"远程仓库合并到本地-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#远程仓库合并到本地-2"}},[t._v("#")]),t._v(" 远程仓库合并到本地")]),t._v(" "),e("p",[t._v("git pull --rebase origin master")]),t._v(" "),e("h2",{attrs:{id:"更新远程仓库-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#更新远程仓库-2"}},[t._v("#")]),t._v(" 更新远程仓库")]),t._v(" "),e("p",[t._v("git push -u origin master")])])}),[],!1,null,null,null);a.default=s.exports}}]);