var editor;
function plugKingEdit(text_obj, fileManagerJson, uploadJson,fileManagerJson){
    KindEditor.ready(function (K) {
        editor = K.create(text_obj, {
            resizeType: 1,
            width: "100%",
            allowPreviewEmoticons: false,
            fileElementId: fileManagerJson,
            uploadJson: uploadJson,  //服务端上传图片处理URI
            fileManagerJson: fileManagerJson,
            /*extraFileUploadParams: {
             },*/
            allowImageUpload: true, //允许上传图片
            allowFileManager: true,
            urlType: 'absolute',
            shadowMode: false,
            items: [
                'source', '|', 'undo', 'redo', '|', 'preview', 'print', 'template', 'code', 'cut', 'copy', 'paste',
                'plainpaste', 'wordpaste', '|', 'justifyleft', 'justifycenter', 'justifyright',
                'justifyfull', 'insertorderedlist', 'insertunorderedlist', 'indent', 'outdent', 'subscript',
                'superscript', 'clearhtml', 'quickformat', 'selectall', '|', 'fullscreen', '/',
                'formatblock', 'fontname', 'fontsize', '|', 'forecolor', 'hilitecolor', 'bold',
                'italic', 'underline', 'strikethrough', 'lineheight', 'removeformat', '|', 'image', 'multiimage', 'media', 'insertfile', 'table', 'hr', 'emoticons', 'baidumap', 'pagebreak',
                'anchor', 'link', 'unlink', '|'
            ],
            afterCreate: function () {
                this.sync();
            },
            afterBlur: function () {
                this.sync();
            },
            afterUpload: function (data) {
                if (data.error === 0) {
                    console.log(data.url);
                } else {
                    console.log(data.message);
                }
            }
        });

        /*  K('#J_selectImage').click(function () {
         editor.loadPlugin('multiimage', function () {
         editor.plugin.multiImageDialog({
         clickFn: function (urlList) {
         var div = K('#J_imageView');
         div.html('');
         K.each(urlList, function (i, data) {
         div.append('<img src="' + data.url + '">')
         });
         editor.hideDialog()
         }
         })
         })
         });*/

    });
}
