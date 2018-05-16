<style lang="less">
</style>

<script>
import wepy from 'wepy'

export default class extends wepy.app {
  config = {
    pages: [
      'pages/index',
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'To-Do',
      navigationBarTextStyle: 'black'
    }
  }

  onLaunch() {
    console.log('on launch')
  }
}
</script>
