<!-- eslint-disable linebreak-style -->
<!-- eslint-disable linebreak-style -->
<!-- eslint-disable linebreak-style -->
<!-- eslint-disable linebreak-style -->
<!-- eslint-disable quotes -->
<!-- eslint-disable linebreak-style -->
<!-- eslint-disable quotes -->
<!-- eslint-disable no-undef -->
<!-- eslint-disable no-undef -->
<!-- eslint-disable quotes -->
<!-- eslint-disable max-len -->
<!-- eslint-disable eol-last -->
<!-- eslint-disable linebreak-style -->
<template>
    <li class="section__card">
        <router-link class="catalog__pic" :to="{name:'card', params: {id: card.id}}">
        <img class="section__card-img" :src="card.image" alt="card.title">
        </router-link>
        <div class="section__card-content">
            <ul class="section__card-links-group">
                <li class="section__card-item"><a class="section__card-links" href="">Travel</a></li>
                <li class="section__card-item"><a class="section__card-links" href="">Health</a></li>
            </ul>
            <h2 class="section__card-head"><a class="section__card-head-link" href="#">10 мест, ради которых стоит проснуться на рассвете</a></h2>
            <span class="section__card-date">10 июня 2019</span>
            <span class="section__card-autor">Неизвестный автор</span>
            <p class="section__card-text">Итак, вы в Питере. Раннее утро. Лед с рек и каналов уже ушел, запущены фонтаны города... Музеи еще закрыты. Что посмотреть?</p>
        </div>
    </li>
</template>
// eslint-disable-next-line linebreak-style
<script>
import gotoPage from '@/helpers/gotoPage';

export default {
  data() {
    return {};
  },
  methods: {
    gotoPage,
  },
  props: ['card'],
};
</script>
