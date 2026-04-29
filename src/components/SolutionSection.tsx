import React from 'react';
import { Button } from './ui/Button';
import { FunnelWidget } from './FunnelWidget';
import { ArrowRight, Check, ExternalLink } from 'lucide-react';
export function SolutionSection() {
  return (
    <section className="min-h-screen w-full flex items-center justify-center px-4 py-12 sm:p-6 md:p-8 bg-gradient-to-b from-slate-950 to-blue-950">
      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-5 sm:space-y-6 md:space-y-8 order-2 lg:order-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs sm:text-sm font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Решение найдено
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Превратите хаос в{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              системный рост
            </span>
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed">
            Хватит сливать бюджет на "мертвые души". Используйте инструменты,
            которые строят отношения, а не просто накручивают счетчики.
          </p>

          <ul className="space-y-3 sm:space-y-4">
            {[
            'Автоматизация прогрева аудитории',
            'Прозрачная аналитика каждого этапа',
            'Удержание клиентов без навязчивости',
            'Интеграция с вашими текущими процессами'].
            map((item, i) =>
            <li
              key={i}
              className="flex items-start sm:items-center gap-3 text-slate-200 text-sm sm:text-base">
              
                <div className="h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5 sm:mt-0">
                  <Check className="h-3 w-3 sm:h-4 sm:w-4 text-green-400" />
                </div>
                {item}
              </li>
            )}
          </ul>

          <div className="flex flex-col gap-3 sm:gap-4 pt-2 sm:pt-4">
            <Button
              size="lg"
              className="hidden w-full sm:w-auto gap-2 bg-blue-600 hover:bg-blue-500 text-sm sm:text-base h-11 sm:h-12">
              
              Попробовать бесплатно <ArrowRight className="h-4 w-4" />
            </Button>
            <a
              href="https://freechising.ru"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full sm:w-auto h-11 sm:h-12 px-4 sm:px-6 rounded-lg border border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white transition-colors gap-2 font-medium text-sm sm:text-base">
              
              Перейти на freechising.ru <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Right Widget Visualization */}
        <div className="relative order-1 lg:order-2">
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-3xl opacity-20 animate-pulse hidden sm:block" />
          <FunnelWidget />
        </div>
      </div>
    </section>);

}