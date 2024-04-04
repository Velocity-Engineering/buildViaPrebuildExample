const aa = [
  {
    "intent-filter": {
      $: {
        "android:autoVerify": "true",
        "android:label": "@string/app_name",
      },
      data: [
        {
          $: {
            "android:scheme": "com.velocity.electrum.prod",
            "android:host": "open",
          },
        },
      ],
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
            "android:name": "android.intent.category.BROWSABLE",
          },
        },
      ],
    },
  },
];
const mainActivityIntents = [
  {
    data: [
      {
        $: {
          "android:scheme": "com.velocity.electrum.prod",
          "android:host": "open",
        },
      },
    ],
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
          "android:name": "android.intent.category.BROWSABLE",
        },
      },
    ],
  },
  {
    action: [
      {
        $: {
          "android:name": "android.intent.action.MAIN",
        },
      },
    ],
    category: [
      {
        $: {
          "android:name": "android.intent.category.LAUNCHER",
        },
      },
    ],
  },
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
          "android:name": "android.intent.category.BROWSABLE",
        },
      },
    ],
    data: [
      {
        $: {
          "android:scheme": "com.velocity.electrum.prod",
          "android:scheme": "exp+electrum",
        },
      },
    ],
  },
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
          "android:name": "android.intent.category.BROWSABLE",
        },
      },
    ],
    data: [
      {
        $: {
          "android:scheme": "com.velocity.electrum.prod",
          "android:scheme": "exp+electrum",
        },
      },
    ],
  },
];

module.exports.mainActivityIntents = aa;
