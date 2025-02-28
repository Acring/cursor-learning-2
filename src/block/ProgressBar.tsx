import React from 'react';

interface ProgressBarProps {
  /**
   * 进度值（0-100）
   */
  progress: number;
  /**
   * 进度条高度
   */
  height?: number;
  /**
   * 进度条颜色
   */
  color?: string;
  /**
   * 背景颜色
   */
  backgroundColor?: string;
  /**
   * 是否显示动画
   */
  animated?: boolean;
  /**
   * 自定义类名
   */
  className?: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  progress,
  height = 8,
  color = '#1677ff',
  backgroundColor = '#f5f5f5',
  animated = true,
  className = '',
}) => {
  // 确保进度值在 0-100 之间
  const normalizedProgress = Math.min(100, Math.max(0, progress));

  return (
    <div
      className={`relative w-full overflow-hidden rounded-full ${className}`}
      style={{
        height,
        backgroundColor,
      }}
    >
      <div
        className={`h-full rounded-full ${animated ? 'transition-all duration-300' : ''}`}
        style={{
          width: `${normalizedProgress}%`,
          backgroundColor: color,
        }}
      />
    </div>
  );
};

export default ProgressBar; 