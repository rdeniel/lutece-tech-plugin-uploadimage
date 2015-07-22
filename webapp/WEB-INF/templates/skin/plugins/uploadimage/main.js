
$(function () {

  'use strict';

  var console = window.console || { log: function () {} },
      $alert = $('.docs-alert'),
      $message = $alert.find('.message'),
      showMessage = function (message, type) {
        $message.text(message);

        if (type) {
          $message.addClass(type);
        }

        $alert.fadeIn();

        setTimeout(function () {
          $alert.fadeOut();
        }, 3000);
      };

  // Demo
  // -------------------------------------------------------------------------
	
  (function () {
    var $image = $('.img-container${fieldName} > img'),
        $dataX = $('#dataX${fieldName}'),
        $dataY = $('#dataY${fieldName}'),
        $dataHeight = $('#dataHeight${fieldName}'),
        $dataWidth = $('#dataWidth${fieldName}'),
        $dataRotate = $('#dataRotate${fieldName}'),
        options = {
           data: {
             x: ${option.x},
             y: ${option.y},
             width: ${option.width},
             height: ${option.height}
           },
	 
           strict: ${option.strict?c},
           responsive: ${option.responsive?c},
           checkImageOrigin: ${option.checkImageOrigin?c},

           modal: ${option.modal?c},
           guides: ${option.guides?c},
           highlight: ${option.highlight?c},
           background: ${option.background?c},

           autoCrop: ${option.autoCrop?c},
           autoCropArea: false,
           dragCrop: ${option.dragCrop?c},
           movable: ${option.movable?c},
           rotatable: ${option.rotatable?c},
           zoomable: ${option.zoomable?c},
           touchDragZoom: ${option.touchDragZoom?c},
           mouseWheelZoom: ${option.mouseWheelZoom?c},
           cropBoxMovable: ${option.cropBoxMovable?c},
           cropBoxResizable: ${option.cropBoxResizable?c},
           doubleClickToggle: ${option.doubleClickToggle?c},

        //   minCanvasWidth: ${option.x},
        //   minCanvasHeight: ${option.x},
        //   minCropBoxWidth: ${option.x},
        //   minCropBoxHeight: ${option.x},
        //   minContainerWidth: ${option.x},
        //   minContainerHeight: ${option.x},

         //  build: null,
         //  built: null,
         //  dragstart: null,
         //  dragmove: null,
         //  dragend: null,
         //  zoomin: null,
         //  zoomout: null,

          aspectRatio: ${option.ratio},
          preview: '.img-preview',
          crop: function (data) {
            $dataX.val(Math.round(data.x));
            $dataY.val(Math.round(data.y));
            $dataHeight.val(Math.round(data.height));
            $dataWidth.val(Math.round(data.width));
            $dataRotate.val(Math.round(data.rotate));
          }
        };

    $image.on({
      'build.cropper': function (e) {
        console.log(e.type);
      },
      'built.cropper': function (e) {
        console.log(e.type);
      },
      'dragstart.cropper': function (e) {
        console.log(e.type, e.dragType);
      },
      'dragmove.cropper': function (e) {
        console.log(e.type, e.dragType);
      },
      'dragend.cropper': function (e) {
        console.log(e.type, e.dragType);
      },
      'zoomin.cropper': function (e) {
        console.log(e.type);
      },
      'zoomout.cropper': function (e) {
        console.log(e.type);
      },
      'change.cropper': function (e) {
        console.log(e.type);
      }
    }).cropper(options);


    // Methods
    $(document.body).on('click', '[data-method]', function () {
      var data = $(this).data(),
          $target,
          result;

      if (!$image.data('cropper')) {
        return;
      }

      if (data.method) {
        data = $.extend({}, data); // Clone a new one

        if (typeof data.target !== 'undefined') {
          $target = $(data.target);

          if (typeof data.option === 'undefined') {
            try {
              data.option = JSON.parse($target.val());
            } catch (e) {
              console.log(e.message);
            }
          }
        }

        result = $image.cropper(data.method, data.option);

	if(data.method === 'deleteImage'){
	      var fieldName= data.option; 
	      $('#imagesrc'+fieldName).val( );
	      $('#canvasImage'+fieldName).html('');
	      $('#deleteButton'+fieldName).hide();
	      exit();
	}
		
        if (data.method === 'getCroppedCanvas') {
		
		$('#imagesrc${fieldName}').val(result.toDataURL());
		$('#canvasImage${fieldName}').html(result);
		$('#deleteButton${fieldName}').show();
		
        }
	
	if (data.method === 'zoom' || data.method === 'rotate'
	 || data.method === 'crop' || data.method === 'clear' 
	 || data.method === 'setDragMode' || data.method === 'enable'
	 || data.method === 'disable' || data.method === 'enable'
	 || data.method === 'reset' || data.method === 'destroy') {
		
        }
	
        if ($.isPlainObject(result) && $target) {
          try {
            $target.val(JSON.stringify(result));
          } catch (e) {
            console.log(e.message);
          }
        }

      }
    }).on('keydown', function (e) {

      if (!$image.data('cropper')) {
        return;
      }

      switch (e.which) {
        case 37:
          e.preventDefault();
          $image.cropper('move', -1, 0);
          break;

        case 38:
          e.preventDefault();
          $image.cropper('move', 0, -1);
          break;

        case 39:
          e.preventDefault();
          $image.cropper('move', 1, 0);
          break;

        case 40:
          e.preventDefault();
          $image.cropper('move', 0, 1);
          break;
      }

    });

    
    // Import image
    var $inputImage = $('#inputImage${fieldName}'),
        URL = window.URL || window.webkitURL,
        blobURL;

    if (URL) {
      $inputImage.change(function () {
	
	$('#label${fieldName}').hide();
	$('#buttonOption${fieldName}').show();
	
        var files = this.files,
            file;

        if (!$image.data('cropper')) {
          return;
        }
	
        if (files && files.length) {
          file = files[0];
	 

          if (/^image\/\w+$/.test(file.type)) {
            blobURL = URL.createObjectURL(file);
            $image.one('built.cropper', function () {
              URL.revokeObjectURL(blobURL); // Revoke when load complete
		
            }).cropper('reset').cropper('replace', blobURL);
	    
            $inputImage.val('');
          } else {
            showMessage('Please choose an image file.');
          }
	   
        }
      });
	
	
    } else {
      $inputImage.parent().remove();
    }
    

    // Options
    $('.docs-options :checkbox').on('change', function () {
      var $this = $(this);

      if (!$image.data('cropper')) {
        return;
      }

      options[$this.val()] = $this.prop('checked');
      $image.cropper('destroy').cropper(options);
    });


    // Tooltips
    $('[data-toggle="tooltip"]').tooltip();

   //hide button

  if(!options.rotatable){
	$('#rotate_right').hide();
	$('#rotate_left').hide();
   };
  if(!options.zoomable){
	$('#zoom_in').hide();
	$('#zoom_out').hide();
   };
  if(!options.movable){
	$('#move').hide();
   };
 

  }());

  
 
   
});

function zoomIn(fieldName) {
	var elem = ".img-container" + fieldName;
    $(elem+" > img").cropper("zoom",0.1);
}

function zoomOut(fieldName) {
	var elem = ".img-container" + fieldName;
    $(elem+" > img").cropper("zoom",-0.1);
}