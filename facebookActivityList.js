const facebookActivityList = [
  {
    $: {
      "android:name": "com.facebook.FacebookActivity",
      "android:configChanges":
        "keyboard|keyboardHidden|screenLayout|screenSize|orientation",
      "android:label": "@string/app_name",
    },
  },
  {
    $: {
      "android:name": "com.facebook.CustomTabActivity",
      "android:exported": "true",
    },
    "intent-filter": [
      {
        action: [
          {
            $: {
              "android:name": "android.intent.action.VIEW",
            },
          },
        ],
        category: [
          {
            $: {
              "android:name": "android.intent.category.DEFAULT",
            },
          },
          {
            $: {
              "android:name": "android.intent.category.BROWSABLE",
            },
          },
        ],
        data: [
          {
            $: {
              "android:scheme": "@string/fb_login_protocol_scheme",
            },
          },
        ],
      },
    ],
  },
];

module.exports.facebookActivityList = facebookActivityList;
