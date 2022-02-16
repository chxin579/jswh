/*!
 * English Translations for krajee-markdown-editor
 *
 * This file must be loaded after 'markdown-editor.js'. Patterns in braces '{}', or
 * any HTML markup tags in the messages must not be converted or translated.
 * 
 * @see http://plugins.krajee.com/markdown-editor
 *
 * NOTE: this file must be saved in UTF-8 encoding.
 */
$.fn.markdownEditorLocales['en-US'] = $.fn.markdownEditorLocales['en-GB'] = $.fn.markdownEditorLocales.en = {
    ajaxParserErrorMsg: '分析markdown文本时出错。请稍后再试.',
    ajaxParserProgressMsg: '正在分析markdown文本 ...',
    noDataMsg: '找不到有效的源数据!',
    exportFileName: '导出',
    buttonTitles: {
        undo: '撤销',
        redo: '恢复',
        bold: '加粗',
        italic: '斜体',
        ins: '下划线/插入文本',
        del: '删除线',
        sup: '上标',
        sub: '下标',
        mark: '高亮文字',
        paragraph: '段落',
        newline: '新的一行',
        heading: '标题',
        link: '超链接',
        image: '图片链接',
        indent: '缩进文本',
        outdent: '扩张文本',
        ul: '无序列表',
        ol: '有序列表',
        dl: '定义列表',
        footnote: '脚注',
        blockquote: '块引号',
        code: '内联代码',
        codeblock: '代码块',
        hr: '水平线',
        emoji: '表情符号',
        fullscreen: '切换全屏模式',
        hint: '用法提示',
        modeEditor: '编辑器模式',
        modePreview: '预览模式',
        modeSplit: '拆分模式',
        export: '导出内容',
        exportHtml: '导出为HTML',
        exportText: '导出为文本'
    },
    buttonLabels: {
        export: '导出',
        exportHtml: 'HTML',
        exportText: 'Text'
    },
    buttonPrompts: {
        link: {
            header: '插入超链接',
            hintInput: '输入超链接地址…',
            hintTitle: '为链接输入文本…'
        },
        image: {
            header: '插入图像链接',
            hintInput: '输入图像链接地址…',
            hintTitle: '输入图像的替代文本…'
        },
        ol: {
            header: '排序列表起始编号',
            hintInput: '从1开始的整数'
        },
        codeblock: {
            header: '输入代码语言',
            hintInput: '例如html、php、js'
        }
    },
    buttonActions: {
        bold: {markup: '**(此处为粗体文本)**'},
        italic: {markup: '_(此处为斜体文本)_'},
        ins: {markup: '_(此处插入文本)_'},
        del: {markup: '_(此处为删除线文本)_'},
        mark: {markup: '_(此处标记文本)_'},
        sup: {markup: '_(此处为上标文本)_'},
        sub: {markup: '_(此处为下标文本)_'},
        paragraph: {markup: '\n(此处为段落文本)\n'},
        heading1: {markup: '# (此处为标题1文本)'},
        heading2: {markup: '## (此处为标题2文本)'},
        heading3: {markup: '### (此处为标题3文本)'},
        heading4: {markup: '#### (此处为标题4文本)'},
        heading5: {markup: '##### (此处为标题5文本)'},
        heading6: {markup: '###### (此处为标题6文本)'}
    },
    templates: {
        exportHeader: '> - - -\n' +
        '> Markdown Export\n' +
        '> ==============\n' +
        '> *Generated {TODAY} by {CREDITS}*\n' +
        '> - - -\n\n',
        hint: '<ul>\n' +
        '  <li><p>您可以按照{LINK_CM}规范（通过{LINK_MI}插件生成）编写标记文本。</p></li>\n' +
        '  <li><p>为了使用工具栏上的格式按钮，通常需要突出显示要应用格式的编辑器中的文本。您也可以通过再次单击按钮（对于大多数按钮）撤消突出显示文本的格式化操作。.</p></li>\n' +
        '  <li><p>按钮的键盘访问快捷方式:</p>' +
        '    {ACCESS_KEYS}' +
        '  </li>\n' +
        '</ul>'
    },
    dialogCancelText: '取消',
    dialogSubmitText: '提交',
    previewErrorTitle: '预览错误',
    previewModeTitle: '预览模式',
    noPreviewUrlMsg: 'markdown预览处理器不可用。请联系系统管理员.',
    previewProgressMsg: '正在生成预览 ...',
    noExportUrlMsg: '导出处理器不可用。请联系系统管理员。',
    emojiSearchHint: '搜索emojis ...',
    loadingMsg: '正在加载 ...'
};