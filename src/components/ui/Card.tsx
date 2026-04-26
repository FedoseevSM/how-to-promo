import React from 'react';
interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}
export function Card({ children, className = '', ...props }: CardProps) {
  return (
    <div
      className={`bg-slate-900 border border-slate-800 rounded-xl shadow-sm ${className}`}
      {...props}>
      
      {children}
    </div>);

}
export function CardHeader({ children, className = '', ...props }: CardProps) {
  return (
    <div className={`p-6 pb-3 ${className}`} {...props}>
      {children}
    </div>);

}
export function CardContent({ children, className = '', ...props }: CardProps) {
  return (
    <div className={`p-6 pt-3 ${className}`} {...props}>
      {children}
    </div>);

}