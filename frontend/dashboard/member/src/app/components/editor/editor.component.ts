import {Component, OnInit} from '@angular/core';
import EditorJS from "@editorjs/editorjs";
import Table from "@editorjs/table";
import Quote from "@editorjs/quote";
// @ts-ignore
import Delimiter from "@coolbytes/editorjs-delimiter";
// @ts-ignore
import Alert from 'editorjs-alert';
// @ts-ignore
import AlignmentTuneTool from "editorjs-text-alignment-blocktune";
// @ts-ignore
import Paragraph from 'editorjs-paragraph-with-alignment';
import Title from "title-editorjs";
import NestedList from '@editorjs/nested-list';
// @ts-ignore
import Checklist from '@editorjs/checklist';
import ImageTool from '@editorjs/image';
// @ts-ignore
import editorjsCodecup from '@calumk/editorjs-codecup';
import InlineCode from '@editorjs/inline-code';
// @ts-ignore
import Marker from '@editorjs/marker';
// @ts-ignore
import Underline from '@editorjs/underline';
// @ts-ignore
import TextVariantTune from '@editorjs/text-variant-tune';
// @ts-ignore
import DragDrop from "editorjs-drag-drop";
// @ts-ignore
import Undo from "editorjs-undo";


@Component({
  selector: 'app-editor',
  standalone: true,
  imports: [],
  templateUrl: './editor.component.html',
  styleUrl: './editor.component.scss'
})
export class EditorComponent implements OnInit {
  editor: EditorJS | undefined

  ngOnInit() {
    const editor = new EditorJS({
      autofocus: true,
      holder: "editor-js",
      placeholder: "Hello, World!",
      onReady: () => {
        new Undo({editor});
        new DragDrop(editor, "2px solid #fff");
      },
      tools: {
        title: Title,
        paragraph: {
          class: Paragraph,
          inlineToolbar: true,
        },
        Marker: {
          class: Marker,
          shortcut: 'CMD+SHIFT+M',
        },
        underline: Underline,
        quote: {
          class: Quote as any,
          inlineToolbar: true,
          shortcut: 'CMD+SHIFT+O',
          config: {
            quotePlaceholder: 'Enter a quote',
            captionPlaceholder: 'Quote\'s author',
          },
        },
        delimiter: {
          class: Delimiter,
          config: {
            styleOptions: ['star', 'dash', 'line'],
            defaultStyle: 'star',
            lineWidthOptions: [8, 15, 25, 35, 50, 60, 100],
            defaultLineWidth: 25,
            lineThicknessOptions: [1, 2, 3, 4, 5, 6],
            defaultLineThickness: 2,
          }
        },
        alert: {
          class: Alert,
          inlineToolbar: true,
          shortcut: 'CMD+SHIFT+A',
          config: {
            alertTypes: ['primary', 'secondary', 'info', 'success', 'warning', 'danger', 'light', 'dark'],
            defaultType: 'primary',
            messagePlaceholder: 'Type here...',
          },
        },
        table: {
          class: Table as any,
          inlineToolbar: true,
          config: {
            rows: 2,
            cols: 4,
            withHeadings: true,
          },
        },
        list: {
          class: NestedList as any,
          inlineToolbar: true,
          config: {
            defaultStyle: 'unordered'
          },
        },
        checklist: {
          class: Checklist,
          inlineToolbar: true,
        },
        image: {
          class: ImageTool as any,
          config: {
            uploader: {
              /**
               * Upload file to the server and return an uploaded image data
               * @param {File} file - file selected from the device or pasted by drag-n-drop
               * @return {Promise.<{success, file: {url}}>}
               */
              uploadByFile(file: File) {
                // your own uploading logic here
                // return MyAjax.upload(file).then(() => {
                return {
                  success: 1,
                  file: {
                    url: 'https://codex.so/upload/redactor_images/o_80beea670e49f04931ce9e3b2122ac70.jpg',
                    // any other image data you want to store, such as width, height, color, extension, etc
                  }
                };
                // });
              },

              /**
               * Send URL-string to the server. Backend should load image by this URL and return an uploaded image data
               * @param {string} url - pasted image URL
               * @return {Promise.<{success, file: {url}}>}
               */
              uploadByUrl(url: string) {
                // your ajax request for uploading
                // return MyAjax.upload(file).then(() => {
                return {
                  success: 1,
                  file: {
                    url: 'https://codex.so/upload/redactor_images/o_e48549d1855c7fc1807308dd14990126.jpg',
                    // any other image data you want to store, such as width, height, color, extension, etc
                  }
                }
                // })
              }
            }
          }
        },
        code: editorjsCodecup,
        inlineCode: {
          class: InlineCode,
        },
        textVariant: TextVariantTune,
        alignmentTune: {
          class: AlignmentTuneTool,
          config: {
            default: "left",
            blocks: {
              header: 'center',
              list: 'right'
            }
          },
        }
      },
      tunes: ['textVariant'],
    })

    this.editor = editor
  }

}
