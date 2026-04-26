import React from 'react';
import { Card, CardContent } from './ui/Card';
import { Briefcase, AlertTriangle, XCircle } from 'lucide-react';
interface ProblemSlideProps {
  number: number;
  title: string;
  corporateThinking: string;
  coreProblem: string;
  icon?: React.ReactNode;
}
export function ProblemSlide({
  number,
  title,
  corporateThinking,
  coreProblem,
  icon
}: ProblemSlideProps) {
  return (
    <section className="min-h-screen w-full flex items-center justify-center px-4 py-8 sm:p-6 md:p-8 border-b border-slate-800 bg-slate-950">
      <div className="max-w-5xl w-full mx-auto">
        {/* Header with number and title */}
        <div className="mb-6 sm:mb-8 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
          <span className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-blue-600/20 text-blue-400 font-bold text-lg sm:text-xl border border-blue-600/30 flex-shrink-0">
            #{number}
          </span>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-tight">
            {title}
          </h2>
        </div>

        {/* Two-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12">
          {/* Corporate Thinking Side */}
          <div className="space-y-3 sm:space-y-4">
            <div className="flex items-center gap-2 text-slate-400 uppercase tracking-wider text-xs sm:text-sm font-semibold">
              <Briefcase className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              Корпоративное мышление
            </div>
            <Card className="bg-slate-900/50 border-slate-800">
              <CardContent className="p-4 sm:pt-6 sm:p-6">
                <p className="text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed italic">
                  "{corporateThinking}"
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Core Problem Side */}
          <div className="space-y-3 sm:space-y-4">
            <div className="flex items-center gap-2 text-red-400 uppercase tracking-wider text-xs sm:text-sm font-semibold">
              <AlertTriangle className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              Суть проблемы
            </div>
            <Card className="bg-red-950/10 border-red-900/30 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-2 sm:p-4 opacity-10">
                <XCircle className="h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 text-red-500" />
              </div>
              <CardContent className="p-4 sm:pt-6 sm:p-6 relative z-10">
                <p className="text-sm sm:text-base md:text-lg text-slate-200 leading-relaxed font-medium">
                  {coreProblem}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>);

}