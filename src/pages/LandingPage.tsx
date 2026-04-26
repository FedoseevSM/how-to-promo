import React from 'react';
import { ProblemSlide } from '../components/ProblemSlide';
import { SolutionSection } from '../components/SolutionSection';
import { ChevronDown } from 'lucide-react';
const slides = [
{
  title: 'Боль #1 — «Запустили канал — аудитория не растёт»',
  corporate:
  'Запланировали кампанию, выделили бюджет на привлечение — но прирост нулевой. Нет причинно-следственной связи: деньги потрачены, результат не зафиксирован в отчёте.',
  problem:
  'Привлечение без стратегии удержания = закупка сырья без производственного цикла. Новые участники приходят — и сразу уходят, так как не видят ценности «здесь и сейчас».'
},
{
  title: 'Боль #2 — «Реклама сливает бюджет»',
  corporate:
  'Таргет — это закупка трафика по смете. Должна быть норма выхода: 1000 кликов → Х подписчиков. А фактически — 90% оттока за 24 часа. Где контроль качества привлечённой аудитории?',
  problem:
  'Платформы продают клики, а не лояльных участников. Без «точки касания» (ценный контент в первые 5 минут) — аудитория уходит как брак на входном контроле.'
},
{
  title: 'Боль #3 — «Алгоритмы душат новые каналы»',
  corporate:
  'В системе учёта каждая операция прозрачна. Здесь — пост опубликован, но охват 2%. Нет лога ошибок, нет объяснения: почему контент не дошёл до адресата.',
  problem:
  'Новые аккаунты для алгоритмов — «непроверенные контрагенты». Без истории взаимодействий (лайки, комментарии, время просмотра) система не даёт охват. Нужен «период грейда» — как ввод нового поставщика в реестр.'
},
{
  title: 'Боль #4 — «Массовый отток после рекламы»',
  corporate:
  'Привлекли 1000 человек — как закупили партию. А через неделю на складе (в канале) осталось 300. Где акт списания? Почему нет системы удержания?',
  problem:
  'Аудитория — не статичный актив. Это живой поток, требующий регулярной «реинвентаризации»: ежедневный полезный контент, триггеры вовлечённости, чек-листы для новых участников.'
},
{
  title: 'Боль #5 — «Подписчики молчат — канал "мёртвый"»',
  corporate:
  'Посты публикуются по графику, но метрика вовлечённости — 0,2%. Как документ в 1С без корреспондирующих счетов: операция проведена, но бизнес-процесс не запущен.',
  problem:
  'Алгоритмы оценивают не количество постов, а глубину взаимодействия. Без комментариев, реакций, репостов — канал попадает в «низколиквидные активы» и теряет охват.'
},
{
  title: 'Боль #6 — «Холодные продажи отпугивают»',
  corporate:
  'Выпустили офер сразу после привлечения — как выставить счёт непроверенному контрагенту. Результат: 0% оплат, 100% недоверия.',
  problem:
  'В российской среде работают отношения, а не транзакции. Нужен «период проверки контрагента»: 7–14 дней полезного контента → кейсы → мягкий офер. Иначе — отток как реакция на агрессивную продажу.'
},
{
  title: 'Боль #7 — «Теневые баны без уведомлений»',
  corporate:
  'В корпоративных системах каждая блокировка сопровождается актом и номером нарушения. Здесь — аккаунт "ушёл в тень", посты не видны, а причина неизвестна. Нет прозрачности — нет возможности устранить дефект.',
  problem:
  'Платформы модерируют проактивно. Резкие скачки активности, шаблонные фразы, массовые рассылки = триггеры бана. Нужен «режим консервации»: плавный грев аккаунта, человеческая тональность, ручная модерация первых дней.'
},
{
  title: 'Боль #8 — «Нет времени — контент хаотичный»',
  corporate:
  'В учёте все операции — по регламенту и графику. В канале — "когда успеем". Результат: разрыв метрик, потеря алгоритмического доверия, падение охвата на 50% за месяц.',
  problem:
  'Алгоритмы любят предсказуемость как бухгалтерия любит регламентные операции. Контент-план = производственный календарь. Без него — простои в воронке удержания.'
},
{
  title: 'Боль #9 — «Правила меняются без предупреждения»',
  corporate:
  'Внутренние регламенты обновляются через приказ и инструктаж. Алгоритмы меняются ночью — и утренний пост, который вчера набрал 10 000 охватов, сегодня видят 200 человек.',
  problem:
  'Нужна система мониторинга изменений: A/B-тесты как пилотные проекты, резервные форматы контента, гибкий контент-план с точками принятия решений (как в методологии управления проектами).'
},
{
  title: 'Боль #10 — «Аудитория есть — заказов нет»',
  corporate:
  'В базе 5000 контактов — как в справочнике "Контрагенты". Но в отчёте "Анализ продаж" — ноль. Где разрыв в воронке? Почему нет конверсии?',
  problem:
  'Аудитория ≠ клиентская база. Это «потенциальные контрагенты», требующие прогрева: 1. Доверие (кейсы, экспертиза) → 2. Вовлечённость (диалог, ответы на вопросы) → 3. Предложение (офер как логичное завершение диалога). Без этапов — 0% конверсии даже при 10 000 подписчиков.'
}];

export function LandingPage() {
  return (
    <div className="bg-slate-950 min-h-screen text-slate-100 selection:bg-blue-500/30 overflow-x-hidden">
      {/* Hero / Intro Section */}
      <section className="min-h-screen w-full flex flex-col items-center justify-center px-4 py-12 sm:p-6 md:p-8 text-center relative border-b border-slate-800">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-950 to-slate-950 pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto space-y-4 sm:space-y-6">
          <div className="inline-block px-3 py-1 sm:px-4 sm:py-1.5 rounded-full border border-slate-700 bg-slate-900/50 text-slate-400 text-xs sm:text-sm font-medium mb-2 sm:mb-4">
            Анализ проблем роста 2026
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-white leading-tight">
            Почему ваш канал{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
              не приносит заказы?
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-slate-400 max-w-2xl mx-auto px-2">
            10 критических ошибок корпоративного мышления в работе с новыми
            медиа и алгоритмами.
          </p>
        </div>

        <div className="absolute bottom-6 sm:bottom-12 animate-bounce text-slate-500 flex flex-col items-center gap-1 sm:gap-2">
          <span className="text-xs sm:text-sm uppercase tracking-widest">
            Листайте вниз
          </span>
          <ChevronDown className="h-5 w-5 sm:h-6 sm:w-6" />
        </div>
      </section>

      {/* Problem Slides - Regular scroll on mobile, no nested scroll container */}
      <div className="w-full">
        {slides.map((slide, index) =>
        <ProblemSlide
          key={index}
          number={index + 1}
          title={slide.title}
          corporateThinking={slide.corporate}
          coreProblem={slide.problem} />

        )}

        <SolutionSection />
      </div>

      {/* Footer with Freechising Logo */}
      <footer className="w-full bg-slate-950 border-t border-slate-800 py-16 sm:py-20 md:py-28 px-4">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center space-y-6 sm:space-y-8">
          {/* Large Logo */}
          <a
            href="https://freechising.org"
            target="_blank"
            rel="noopener noreferrer"
            className="group">
            
            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 group-hover:from-blue-300 group-hover:via-cyan-300 group-hover:to-blue-400 transition-all duration-500">
              Freechising
            </h2>
            <p className="text-2xl sm:text-3xl md:text-4xl text-slate-400 mt-2 group-hover:text-slate-300 transition-colors">
              Фричайзинг
            </p>
          </a>

          {/* Tagline / Slogan */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 blur-2xl rounded-full opacity-50" />
            <p className="relative text-xl sm:text-2xl md:text-3xl font-bold text-white">
              Фричайзинг,{' '}
              <span className="text-slate-500 line-through decoration-red-500/70 decoration-2">
                не франчайзинг
              </span>
            </p>
          </div>

          {/* Copyright */}
          <p className="text-sm text-slate-600 pt-8">
            © {new Date().getFullYear()} Freechising. Все права защищены.
          </p>
        </div>
      </footer>
    </div>);

}