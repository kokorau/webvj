import * as THREE from 'three'

export default {
  props: {
    isCamera: {
      type: Boolean,
      default: false,
      required: false
    }
  },
  data () {
    return {
      uniforms: {},
      video: null
    }
  },
  mounted () {
    if (this.isCamera) {
      this.setCamera()
    }
  },
  methods: {
    setCamera () {
      const video = document.createElement('video')
      const texture = new THREE.VideoTexture(video);
      texture.minFilter = THREE.LinearFilter;
      texture.magFilter = THREE.LinearFilter;
      texture.format = THREE.RGBFormat;

      this.uniforms.camera = {type: 't', value: texture}

      if ( navigator.mediaDevices && navigator.mediaDevices.getUserMedia ) {
        const constraints = { video: { width: 1000, height: 1000, facingMode: 'user' } };
        navigator.mediaDevices.getUserMedia( constraints ).then( stream => {
          // apply the stream to the video element used in the texture
          // video.src = window.URL.createObjectURL( stream );
          video.srcObject = stream
          video.play();
        } ).catch( function( error ) {
          console.error( 'Unable to access the camera/webcam.', error );
        } );
      } else {
        console.error( 'MediaDevices interface not available.' );
      }
    }
  }
}
