<!-- eslint-disable linebreak-style -->
<!-- eslint-disable max-len -->
<template>
    <div class="">
        <ul class="section__group">
            <SectionCard  class="catalog__item" v-for="card in cards" :key="card.id" :card ="card"></SectionCard>
        </ul>
        <!-- <div class="section__card">
            <img class="section__card-img" src="/img/last-post1.jpg" alt="">
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
        </div>
        <div class="section__card">
            <img class="section__card-img" src="/img/last-post2.jpg" alt="">
            <div class="section__card-content">
                <ul class="section__card-links-group">
                    <li class="section__card-item"><a class="section__card-links" href="">Health</a></li>
                    <li class="section__card-item"><a class="section__card-links" href="">lifeStyle</a></li>
                </ul>
                <h2 class="section__card-head"><a class="section__card-head-link" href="#">Йога для начинающих в домашних условиях</a></h2>
                <span class="section__card-date">10 июня 2019</span>
                <span class="section__card-autor">Неизвестный автор</span>
                <p class="section__card-text">Расскажем, какие упражнения выбрать и как сделать коврик для занятий йогой из того, что можно нойти в шкафу.</p>
            </div>
        </div>
        <div class="section__card">
            <img class="section__card-img" src="/img/last-post3.jpg" alt="">
            <div class="section__card-content">
                <ul class="section__card-links-group">
                    <li class="section__card-item"><a class="section__card-links" href="">music</a></li>
                    <li class="section__card-item"><a class="section__card-links" href=""></a></li>
                </ul>
                <h2 class="section__card-head"><a class="section__card-head-link" href="#">Лучшие музыкальные фестивали этого лета</a></h2>
                <span class="section__card-date">10 июня 2019</span>
                <span class="section__card-autor">Неизвестный автор</span>
                <p class="section__card-text">Лето на носу, а с ним и музыкальные фестивали. На каком же из них вы разобьете свою палатку?</p>
                <p class="section__card-text text">Мы составили список лучшик летних фестивалей по всему миру.</p>
            </div>
        </div>
        <div class="section__card">
            <img class="section__card-img" src="/img/last-post4.jpg" alt="">
            <div class="section__card-content">
                <ul class="section__card-links-group">
                    <li class="section__card-item"> <a class="section__card-links" href="">lifeStyle</a></li>
                    <li class="section__card-item"><a class="section__card-links" href="">food</a></li>
                </ul>
                <h2 class="section__card-head"><a class="section__card-head-link" href="#">Наукоемкий подход к кулинарии</a></h2>
                <span class="section__card-date">10 июня 2019</span>
                <span class="section__card-autor">Неизвестный автор</span>
                <p class="section__card-text">Узнаем основы проектирования новых пищевых и около-пищевых опытов, вскроем физику, химию и микробиологию еды</p>
            </div>
        </div>
        <div class="section__card">
            <img class="section__card-img" src="/img/last-post5.jpg" alt="">
            <div class="section__card-content">
                <ul class="section__card-links-group">
                    <li class="section__card-item"> <a class="section__card-links" href="">lifestyle</a></li>
                    <li class="section__card-item"> <a class="section__card-links" href="">interior</a></li>
                    <li class="section__card-item"><a class="section__card-links" href="">art</a></li>
                </ul>
                <h2 class="section__card-head"><a class="section__card-head-link" href="#">делаем модные принты на подушках для интерьера</a></h2>
                <span class="section__card-date">10 июня 2019</span>
                <span class="section__card-autor">Неизвестный автор</span>
                <p class="section__card-text">Подушки для дивана целесообразнее заказать в съемных чехлах на молнии, если потребуется чистка подушек, проще снять чехлы, чем везти подушку в химчистку</p>
            </div>
        </div>
        <div class="section__card">
            <img class="section__card-img" src="/img/last-post6.jpg" alt="">
            <div class="section__card-content">
                <ul class="section__card-links-group">
                    <li class="section__card-item"><a class="section__card-links" href="">Travel</a></li>
                    <li class="section__card-item"><a class="section__card-links" href="">lifeStyle</a></li>
                </ul>
                <h2 class="section__card-head"><a class="section__card-head-link" href="#">как первый раз отправиться в горы?</a></h2>
                <span class="section__card-date">10 июня 2019</span>
                <span class="section__card-autor">Неизвестный автор</span>
                <p class="section__card-text">Для начала нужно определиться, в каком формате пройдет ваше путешествие. Это зависит от многих факторов, не только от ваших желаний и интересов.</p>
            </div>
        </div>
        <div class="section__card">
            <img class="section__card-img" src="/img/last-post4.jpg" alt="">
            <div class="section__card-content">
                <ul class="section__card-links-group">
                    <li class="section__card-item"><a class="section__card-links" href="">lifeStyle</a></li>
                    <li class="section__card-item"><a class="section__card-links" href="">food</a></li>
                </ul>
                <h2 class="section__card-head"><a class="section__card-head-link" href="#">Наукоемкий подход к кулинарии</a></h2>
                <span class="section__card-date">10 июня 2019</span>
                <span class="section__card-autor">Неизвестный автор</span>
                <p class="section__card-text">Узнаем основы проектирования новых пищевых и около-пищевых опытов, вскроем физику, химию и микробиологию еды</p>
            </div>
        </div> -->
    </div>
</template>
<script>
import SectionCard from './SectionCard.vue';
export default {
    props: ['cards'],
    components: { SectionCard }, 
}
</script>