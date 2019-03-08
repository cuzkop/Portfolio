<template>
  <div class="hello">
    <h1 style="text-align: center;">Skill</h1>
    <p>
      <skillPanel v-for='skill in skills' v-bind:item='skill' :key='skill.name'></skillPanel>
    </p>
  </div>
</template>

<script>
import skillPanel from '@/components/SkillPanel'
export default {
  name: 'Skill',
  components: {
    skillPanel
  },
  data() {
    return {
      skills: [
        {
          name: 'PHP/Laravel',
          detail: '主に社内管理ツールの作成を行っています。2ヶ月で基本的な勉強をした後にLaravelで実務を行っており、最も多用している言語、フレームワークになります。'
        },
        {
          name: 'HTML5/CSS3',
          detail: '社内管理ツールのために最低限押さえてはいます。使用歴のあるライブラリはMaterialize CSSとVuetifyです。'
        },
        {
          name: 'JavaScript/Vue.js',
          detail: '社内管理ツールのフロント側でイベントを発火させるためにJavaScriptを生で使用しています。独学で勉強しつつ実務で慣れるという形をとっておりますが、まだ調べながらの実装になることが多いです。Vue.jsはこのポートフォリオを完成させるために勉強を始めました。使用歴はまだ浅いです。'
        },
        {
          name: 'Git',
          detail: '社内管理ツール開発におけるバージョン管理に使用しています。社内ではBackLogのGitを、プライベートではGithubを使用しています。基本的なpull,push,commit,clone,initなどは問題なく扱えます。'
        },
        {
          name: 'GCP',
          detail: '最近、社内管理ツールのテスト環境及び本番環境とその他サーバーをオンプレからGCPに移行する際に初めて触りました。GCEにてインスタンスを作成して、CentOS上にnginx,php,php-fpmをインストールして一通り環境を構築するところまでは経験があります。'
        },
        {
          name: 'MySQL',
          detail: '基本動作は問題なく使えます。上記のPHP/Laravelと並行して実務経験があります。'
        },
        {
          name: 'Golang',
          detail: '書籍にて勉強後、業務用スクレイピングツールを開発中です。'
        }
      ]
    }
  }
}
</script>
