module.exports = {
  title: 'Patient file documentation',
  plugins: ['vuepress-plugin-table-of-contents','tabs'],
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Savant', link: 'https://www.savantcare.com/' },
      { text: 'Repo', link: 'https://www.github.com/savantcare/patientfile' }
    ],
    sidebar: [
      {
        title: 'Home',   // required
        path: '/',      // optional, link of the title, which should be an absolute path and must exist
        collapsable: false, // optional, defaults to true
        sidebarDepth: 1,    // optional, defaults to 1
      },
      {
        title: 'Tech',   // required
        path: '/tech/',      // optional, link of the title, which should be an absolute path and must exist
        collapsable: false, // optional, defaults to true
        sidebarDepth: 1,    // optional, defaults to 1
        children: [
          ['/tech/why','Why'],
          ['/tech/what','What'],
          ['/tech/howto','How']
        ]
      },
      {
        title: 'Components',
        path: '/components/',      // optional, link of the title, which should be an absolute path and must exist
        collapsable: false, // optional, defaults to true
        sidebarDepth: 1,    // optional, defaults to 1
        children: [ 
          ['/components/health/','Health'],
          ['/components/others/','Others'],
        ]
      },
      {
        title: 'UI',
        path: '/ui/',      // optional, link of the title, which should be an absolute path and must exist
        collapsable: false, // optional, defaults to true
        sidebarDepth: 1,    // optional, defaults to 1
        children: [
          ['/ui/why','Why'],
          ['/ui/what','What']
        ]
      },
      {
        title: 'Todo',
        path: 'todo',      // optional, link of the title, which should be an absolute path and must exist
        collapsable: false, // optional, defaults to true
        sidebarDepth: 1,    // optional, defaults to 1
      }
    ]
  }
}
