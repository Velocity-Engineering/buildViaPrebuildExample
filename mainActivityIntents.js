const mainActivityIntent = [
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
        },
      },
      {
        $: {
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
          "android:scheme": "com.velocity.electrum.prod",
        },
      },
      {
        $: {
          "android:scheme": "exp+electrum",
        },
      },
    ],
  },
  {
    $: {
      "android:autoVerify": "true",
      "android:label": "@string/app_name",
    },
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
          "android:scheme": "https",
          "android:host": "electrum.page.link",
        },
      },
      {
        $: {
          "android:scheme": "https",
          "android:host": "velocity.in",
        },
      },
    ],
  },
  {
    $: {
      "data-generated": "true",
    },
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
          "android:name": "android.intent.category.BROWSABLE",
        },
      },
      {
        $: {
          "android:name": "android.intent.category.DEFAULT",
        },
      },
    ],
    data: [
      {
        $: {
          "android:scheme": "com.velocity.electrum.prod",
        },
      },
      {
        $: {
          "android:scheme": "exp+electrum",
        },
      },
    ],
  },
  {
    $: {
      "android:autoVerify": "true",
    },
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
          "android:scheme": "https",
          "android:host": "velocitypayments.app.link",
        },
      },
    ],
  },
];
module.exports.mainActivityIntent = mainActivityIntent;
