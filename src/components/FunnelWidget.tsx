import React from 'react';
import { Card, CardContent, CardHeader } from './ui/Card';
import { Users, Filter, CheckCircle, TrendingUp, BarChart3 } from 'lucide-react';
export function FunnelWidget() {
  return (
    <Card className="w-full max-w-sm sm:max-w-md mx-auto bg-slate-900 border-slate-700 shadow-2xl overflow-hidden transition-all duration-500 sm:hover:scale-105">
      <CardHeader className="bg-slate-800 border-b border-slate-700 flex flex-row items-center justify-between p-3 sm:p-4 md:p-6 pb-3">
        <div className="flex items-center gap-1.5 sm:gap-2">
          <div className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-red-500" />
          <div className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-yellow-500" />
          <div className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-green-500" />
        </div>
        <div className="text-[10px] sm:text-xs text-slate-400 font-mono">
          widget.saas.io
        </div>
      </CardHeader>

      <CardContent className="p-4 sm:p-6 space-y-4 sm:space-y-6">
        <div className="flex items-center justify-between mb-1 sm:mb-2">
          <h3 className="text-slate-100 font-semibold flex items-center gap-1.5 sm:gap-2 text-sm sm:text-base">
            <BarChart3 className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-blue-400" />
            Воронка Продаж
          </h3>
          <span className="text-[10px] sm:text-xs bg-green-500/20 text-green-400 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full">
            Active
          </span>
        </div>

        {/* Funnel Visualization */}
        <div className="space-y-1.5 sm:space-y-2">
          {/* Stage 1 */}
          <div className="relative group">
            <div className="absolute inset-0 bg-blue-500/10 rounded-lg -z-10 w-full" />
            <div className="flex items-center justify-between p-2.5 sm:p-3 rounded-lg border border-blue-500/20">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="p-1.5 sm:p-2 bg-blue-500/20 rounded-md">
                  <Users className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-blue-400" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-medium text-slate-200">
                    Посетители
                  </div>
                  <div className="text-[10px] sm:text-xs text-slate-400">
                    Входной трафик
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-base sm:text-lg font-bold text-white">
                  12,450
                </div>
                <div className="text-[10px] sm:text-xs text-green-400 flex items-center justify-end gap-0.5 sm:gap-1">
                  <TrendingUp className="h-2.5 w-2.5 sm:h-3 sm:w-3" /> +12%
                </div>
              </div>
            </div>
          </div>

          {/* Connector */}
          <div className="flex justify-center -my-0.5 sm:-my-1 relative z-10">
            <div className="h-3 sm:h-4 w-0.5 bg-slate-700" />
          </div>

          {/* Stage 2 */}
          <div className="relative group">
            <div className="absolute inset-0 bg-purple-500/10 rounded-lg -z-10 w-[80%] mx-auto" />
            <div className="flex items-center justify-between p-2.5 sm:p-3 rounded-lg border border-purple-500/20 w-[90%] mx-auto bg-slate-900/50">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="p-1.5 sm:p-2 bg-purple-500/20 rounded-md">
                  <Filter className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-purple-400" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-medium text-slate-200">
                    Лиды
                  </div>
                  <div className="text-[10px] sm:text-xs text-slate-400">
                    Прогрев контентом
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-base sm:text-lg font-bold text-white">
                  3,840
                </div>
                <div className="text-[10px] sm:text-xs text-slate-400">
                  30.8% conv
                </div>
              </div>
            </div>
          </div>

          {/* Connector */}
          <div className="flex justify-center -my-0.5 sm:-my-1 relative z-10">
            <div className="h-3 sm:h-4 w-0.5 bg-slate-700" />
          </div>

          {/* Stage 3 */}
          <div className="relative group">
            <div className="absolute inset-0 bg-green-500/10 rounded-lg -z-10 w-[60%] mx-auto" />
            <div className="flex items-center justify-between p-2.5 sm:p-3 rounded-lg border border-green-500/20 w-[80%] mx-auto bg-slate-900/80">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="p-1.5 sm:p-2 bg-green-500/20 rounded-md">
                  <CheckCircle className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-green-400" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-medium text-slate-200">
                    Продажи
                  </div>
                  <div className="text-[10px] sm:text-xs text-slate-400">
                    Лояльные клиенты
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-base sm:text-lg font-bold text-white">
                  892
                </div>
                <div className="text-[10px] sm:text-xs text-green-400">
                  23.2% conv
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-3 sm:pt-4 border-t border-slate-700">
          <div className="flex justify-between text-xs sm:text-sm">
            <span className="text-slate-400">ROI Кампании</span>
            <span className="text-green-400 font-bold">+450%</span>
          </div>
          <div className="w-full bg-slate-800 h-1.5 sm:h-2 rounded-full mt-1.5 sm:mt-2 overflow-hidden">
            <div className="bg-green-500 h-full w-[85%]" />
          </div>
        </div>
      </CardContent>
    </Card>);

}