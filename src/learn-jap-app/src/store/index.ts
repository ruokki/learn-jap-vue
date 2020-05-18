import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    useHira: false,
    useKata: false,
    tiles: 0,
    charSet: {
        hira: [
            /* Syllabes avec le a */
            { char: "あ", rep: "a" },
            { char: "か", rep: "ka" },
            { char: "さ", rep: "sa" },
            { char: "た", rep: "ta" },
            { char: "な", rep: "na" },
            { char: "は", rep: "ha" },
            { char: "ま", rep: "ma" },
            { char: "や", rep: "ya" },
            { char: "ら", rep: "ra" },
            { char: "わ", rep: "wa" },
            { char: "が", rep: "ga" },
            { char: "ざ", rep: "za" },
            { char: "だ", rep: "da" },
            { char: "ば", rep: "ba" },
            { char: "ぱ", rep: "pa" },
            /* Syllabes avec le i */
            { char: "い", rep: "i" },
            { char: "き", rep: "ki" },
            { char: "し", rep: "shi" },
            { char: "ち", rep: "chi" },
            { char: "に", rep: "ni" },
            { char: "ひ", rep: "hi" },
            { char: "み", rep: "mi" },
            { char: "り", rep: "ri" },
            { char: "ゐ", rep: "wi" },
            { char: "ぎ", rep: "gi" },
            { char: "じ", rep: "ji" },
            { char: "ぢ", rep: "dji" },
            { char: "び", rep: "bi" },
            { char: "ぴ", rep: "pi" },
            /* Syllabes avec le u */
            { char: "う", rep: "u" },
            { char: "く", rep: "ku" },
            { char: "す", rep: "su" },
            { char: "つ", rep: "tsu" },
            { char: "ぬ", rep: "nu" },
            { char: "ふ", rep: "fu" },
            { char: "む", rep: "mu" },
            { char: "ゆ", rep: "yu" },
            { char: "る", rep: "ru" },
            { char: "ぐ", rep: "gu" },
            { char: "ず", rep: "zu" },
            { char: "づ", rep: "dzu" },
            { char: "ぶ", rep: "bu" },
            { char: "ぷ", rep: "pu" },
            /* Syllabes avec le e */
            { char: "え", rep: "e" },
            { char: "け", rep: "ke" },
            { char: "せ", rep: "se" },
            { char: "て", rep: "te" },
            { char: "ね", rep: "ne" },
            { char: "へ", rep: "he" },
            { char: "め", rep: "me" },
            { char: "れ", rep: "re" },
            { char: "ゑ", rep: "we" },
            { char: "げ", rep: "ge" },
            { char: "ぜ", rep: "ze" },
            { char: "で", rep: "de" },
            { char: "べ", rep: "be" },
            { char: "ぺ", rep: "pe" },
            /* Syllabes avec le o */
            { char: "お", rep: "o" },
            { char: "こ", rep: "ko" },
            { char: "そ", rep: "so" },
            { char: "と", rep: "to" },
            { char: "の", rep: "no" },
            { char: "ほ", rep: "ho" },
            { char: "も", rep: "mo" },
            { char: "よ", rep: "yo" },
            { char: "ろ", rep: "ro" },
            { char: "を", rep: "wo" },
            { char: "ご", rep: "go" },
            { char: "ぞ", rep: "zo" },
            { char: "ど", rep: "do" },
            { char: "ぼ", rep: "bo" },
            { char: "ぽ", rep: "po" },
        ],
        kata: [
            /* Syllabes avec le a */
            { char: "ア", rep: "a" },
            { char: "カ", rep: "ka" },
            { char: "サ", rep: "sa" },
            { char: "タ", rep: "ta" },
            { char: "ナ", rep: "na" },
            { char: "ハ", rep: "ha" },
            { char: "マ", rep: "ma" },
            { char: "ヤ", rep: "ya" },
            { char: "ラ", rep: "ra" },
            { char: "ワ", rep: "wa" },
            { char: "ガ", rep: "ga" },
            { char: "ザ", rep: "za" },
            { char: "ダ", rep: "da" },
            { char: "バ", rep: "ba" },
            { char: "パ", rep: "pa" },
            /* Syllabes avec le i */
            { char: "イ", rep: "i" },
            { char: "キ", rep: "ki" },
            { char: "シ", rep: "shi" },
            { char: "チ", rep: "chi" },
            { char: "ニ", rep: "ni" },
            { char: "ヒ", rep: "hi" },
            { char: "ミ", rep: "mi" },
            { char: "リ", rep: "ri" },
            { char: "ヰ", rep: "wi" },
            { char: "ギ", rep: "gi" },
            { char: "ジ", rep: "ji" },
            { char: "ヂ", rep: "dji" },
            { char: "ビ", rep: "bi" },
            { char: "ピ", rep: "pi" },
            /* Syllabes avec le u */
            { char: "ウ", rep: "u" },
            { char: "ク", rep: "ku" },
            { char: "ス", rep: "su" },
            { char: "ツ", rep: "tsu" },
            { char: "ヌ", rep: "nu" },
            { char: "フ", rep: "fu" },
            { char: "ム", rep: "mu" },
            { char: "ユ", rep: "yu" },
            { char: "ル", rep: "ru" },
            { char: "グ", rep: "gu" },
            { char: "ズ", rep: "zu" },
            { char: "ヅ", rep: "dzu" },
            { char: "ブ", rep: "bu" },
            { char: "プ", rep: "pu" },
            /* Syllabes avec le e */
            { char: "エ", rep: "e" },
            { char: "ケ", rep: "ke" },
            { char: "セ", rep: "se" },
            { char: "テ", rep: "te" },
            { char: "ネ", rep: "ne" },
            { char: "ヘ", rep: "he" },
            { char: "メ", rep: "me" },
            { char: "レ", rep: "re" },
            { char: "ヱ", rep: "we" },
            { char: "ゲ", rep: "ge" },
            { char: "ゼ", rep: "ze" },
            { char: "デ", rep: "de" },
            { char: "ベ", rep: "be" },
            { char: "ペ", rep: "pe" },
            /* Syllabes avec le o */
            { char: "オ", rep: "o" },
            { char: "コ", rep: "ko" },
            { char: "ソ", rep: "so" },
            { char: "ト", rep: "to" },
            { char: "ノ", rep: "no" },
            { char: "ホ", rep: "ho" },
            { char: "モ", rep: "mo" },
            { char: "ヨ", rep: "yo" },
            { char: "ロ", rep: "ro" },
            { char: "ヲ", rep: "wo" },
            { char: "ゴ", rep: "go" },
            { char: "ゾ", rep: "zo" },
            { char: "ド", rep: "do" },
            { char: "ボ", rep: "bo" },
            { char: "ポ", rep: "po" },
        ]
    }
  },
  getters: {
    getTiles:(state) => state.tiles,
    isHira: (state) => state.useHira,
    isKata: (state) => state.useKata,
    getCharSet: (state) => state.charSet
  },
  mutations: {
    USE_HIRA(state): void {
      state.useHira = true;
    },
    REMOVE_HIRA(state): void {
      state.useHira = false;
    },
    USE_KATA(state): void {
      state.useKata = true;
    },
    REMOVE_KATA(state): void {
      state.useKata = false;
    },
    SET_TILE(state, payload): void {
      state.tiles = payload;
    }
  },
  actions: {
    setChar({ commit }, charToUse: any) {
      if(charToUse.hira === true) {
        commit('USE_HIRA');
      }
      else {
        commit('REMOVE_HIRA');
      }

      if(charToUse.kata === true) {
        commit('USE_KATA');
      }
      else {
        commit('REMOVE_KATA');
      }
    },
    setTile({commit}, nbTile: number) {
      if(nbTile > 0) {
        commit('SET_TILE', nbTile);
      }
      else {
        commit('SET_TILE', 4);
      }
    }
  },
  modules: {
  }
})
