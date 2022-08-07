export default {
  pages: [
    'pages/index/index',
    // network
    'pages/network/useRequest/index',
    'pages/network/useRequest/basic/index',
    'pages/network/useRequest/basic/manualRun',
    'pages/network/useRequest/basic/manualRunAsync',
    'pages/network/useRequest/basic/lifeCycle',
    'pages/network/useRequest/basic/refresh',
    'pages/network/useRequest/basic/mutate',
    'pages/network/useRequest/basic/params',
    'pages/network/useRequest/basic/cancel',
    'pages/network/useRequest/cache/cacheKey',
    'pages/network/useRequest/cache/clearCache',
    'pages/network/useRequest/cache/params',
    'pages/network/useRequest/cache/setCache',
    'pages/network/useRequest/cache/share',
    'pages/network/useRequest/cache/staleTime',
    'pages/network/useRequest/debounce/index',
    'pages/network/useRequest/loadingDelay/index',
    'pages/network/useRequest/polling/index',
    'pages/network/useRequest/ready/index',
    'pages/network/useRequest/ready/manualReady',
    'pages/network/useRequest/refreshDeps/index',
    'pages/network/useRequest/refreshOnWindowFocus/index',
    'pages/network/useRequest/retry/index',
    'pages/network/useRequest/throttle/index',
    'pages/network/useNetworkType/index',
    'pages/network/useOnline/index',
    'pages/network/useFile/index',
    // env
    'pages/environment/useEnv/index',
    // basic
    'pages/basic/useApp/index',
    'pages/basic/usePage/index',
    'pages/basic/useWebp/index',
    'pages/basic/useVisible/index',
    'pages/basic/usePromise/index',
    'pages/basic/useSystemInfo/index',
    'pages/basic/useDeviceInfo/index',
    'pages/basic/useWindowInfo/index',
    'pages/basic/useArrayBuffer/index',
    'pages/basic/useClipboardData/index',
    'pages/basic/useRouter/index',
    'pages/basic/useFrom/index',
    // wechat
    'pages/wechat/useAccountInfo/index',
    'pages/wechat/useAPICheck/index',
    'pages/wechat/useLaunchOptions/index',
    'pages/wechat/useEnterOptions/index',
    // devices
    'pages/device/useBattery/index',
    'pages/device/useVibrate/index',
    // feedback
    'pages/feedback/useActionSheet/index',
    'pages/feedback/useLoading/index',
    'pages/feedback/useModal/index',
    'pages/feedback/useNavigationBar/index',
    'pages/feedback/useToast/index',
    'pages/feedback/useAlertBeforeUnload/index',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'Taro-Hooks',
    navigationBarTextStyle: 'black',
  },
};
