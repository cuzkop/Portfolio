<template>
  <div class="hello">
    <h1 style="text-align: center;">Works</h1>
    <p>
      <profile v-for='profile in profiles' v-bind:item='profile' :key='profile.title' class="prof"></profile>
    </p>
  </div>
</template>

<script>
import profile from '@/components/Profile'
export default {
  name: 'Works',
  components: {
    profile
  },
  data() {
    return {
      profiles: [
        {
          title: 'アフィリエイトサービスプロバイダ改修PJ',
          content: '弊社の既存ASPの改修をPHP/ZendFramworkを用いて行った。10年動いてる巨大モノリシックシステムなため、現状調査に時間をかけ柔軟性が出るように対応'
        },
        {
          title: '社内向け広告配信管理ツール開発PJ',
          content: 'PHP/Laravelでの開発PJに途中からアサインされる。要件定義からリリースまでの工程を全て経験。フロントではVue.jsも用いて開発。綺麗なコード、保守性の高いプロダクトとはというものを学ぶ。また、パフォーマンスチューニングも行なった。'
        },
        {
          title: '管理ツール移行PJ',
          content: '上記管理ツールのサーバーをオンプレからGCPに移行するPJ。知識は無かったものの、自らの興味から手をあげて担当。必要なものをインストールして動くところまで経験。クラウド、インフラの楽しさを感じる。また、CIツールJenkinsの導入も同時に行い、自動デプロイ化。'
        },
        {
          title: '管理ツール開発環境Docker化PJ',
          content: 'こちらも上記ツール関連。今までvagrantで動いていたものを、Dockerに変更。これも知識が無かったため、勉強や試行錯誤しながら環境構築にかかる工数を大幅に削った。'
        },
        {
          title: '指定キーワード検索結果スクレイピングプログラム',
          content: 'Golangの勉強のアウトプットの一環として開発中。指定したキーワードのyahoo検索結果から、特定条件に当たるものを抽出し、CSVにてダウンロードできる機能をGAE環境にて開発中。'
        },
      ]
    }
  }
}
</script>
<style scoped>
.prof >>> .head {
  background: #E8EAF6;
}
.prof >>> .content {
  overflow: scroll;
}
</style>

