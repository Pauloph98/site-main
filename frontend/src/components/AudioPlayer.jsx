import React, { useState, useRef, useEffect } from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Volume2, VolumeX, Play, Pause, RotateCcw, Download } from 'lucide-react';

/**
 * AudioPlayer Acessível para Cartilha
 * WCAG 2.1 AA compliant com controles grandes e ARIA labels
 */
export const AudioPlayer = ({ 
  audioSrc, 
  title = "Áudio da Cartilha",
  autoDownload = false 
}) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [error, setError] = useState(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleLoadedMetadata = () => {
      setDuration(audio.duration);
    };

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
    };

    const handleEnded = () => {
      setIsPlaying(false);
      setCurrentTime(0);
    };

    const handleError = (e) => {
      console.error('Erro ao carregar áudio:', e);
      setError('Não foi possível carregar o áudio. Tente fazer o download.');
    };

    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('ended', handleEnded);
    audio.addEventListener('error', handleError);

    return () => {
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('ended', handleEnded);
      audio.removeEventListener('error', handleError);
    };
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play().catch(err => {
        console.error('Erro ao reproduzir:', err);
        setError('Erro ao reproduzir áudio');
      });
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    const audio = audioRef.current;
    audio.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleRestart = () => {
    const audio = audioRef.current;
    audio.currentTime = 0;
    setCurrentTime(0);
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    audioRef.current.volume = newVolume;
    setVolume(newVolume);
    if (newVolume === 0) {
      setIsMuted(true);
    } else if (isMuted) {
      setIsMuted(false);
    }
  };

  const handleProgressChange = (e) => {
    const newTime = parseFloat(e.target.value);
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const formatTime = (time) => {
    if (isNaN(time)) return '0:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = audioSrc;
    link.download = 'cartilha_audio.mp3';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (error) {
    return (
      <Card className="p-6 bg-yellow-50 border-yellow-200">
        <div className="flex items-center gap-3 mb-4">
          <VolumeX className="h-6 w-6 text-yellow-600" />
          <p className="text-base text-yellow-800">{error}</p>
        </div>
        <Button 
          onClick={handleDownload}
          className="min-h-touch min-w-touch text-base"
          aria-label="Baixar áudio"
        >
          <Download className="mr-2 h-5 w-5" />
          Baixar Áudio
        </Button>
      </Card>
    );
  }

  return (
    <Card className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200 shadow-lg print:hidden">
      <audio ref={audioRef} src={audioSrc} preload="metadata" />
      
      <div className="space-y-4">
        {/* Título */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Volume2 className="h-6 w-6 text-blue-600" aria-hidden="true" />
            <h3 className="text-lg font-bold text-gray-900">{title}</h3>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleDownload}
            className="min-h-touch min-w-touch"
            aria-label="Baixar áudio para ouvir offline"
          >
            <Download className="h-5 w-5 text-blue-600" />
          </Button>
        </div>

        {/* Barra de Progresso */}
        <div className="space-y-2">
          <input
            type="range"
            min="0"
            max={duration || 0}
            value={currentTime}
            onChange={handleProgressChange}
            className="w-full h-3 bg-blue-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
            aria-label="Barra de progresso do áudio"
            aria-valuemin="0"
            aria-valuemax={duration}
            aria-valuenow={currentTime}
            aria-valuetext={`${formatTime(currentTime)} de ${formatTime(duration)}`}
          />
          <div className="flex justify-between text-sm text-gray-600">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>

        {/* Controles Principais */}
        <div className="flex items-center justify-center gap-4">
          <Button
            onClick={handleRestart}
            variant="outline"
            size="lg"
            className="min-h-touch min-w-touch text-base"
            aria-label="Reiniciar áudio do início"
          >
            <RotateCcw className="h-6 w-6" aria-hidden="true" />
          </Button>

          <Button
            onClick={togglePlay}
            size="lg"
            className="min-h-[56px] min-w-[56px] rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg"
            aria-label={isPlaying ? 'Pausar áudio' : 'Reproduzir áudio'}
          >
            {isPlaying ? (
              <Pause className="h-8 w-8" aria-hidden="true" />
            ) : (
              <Play className="h-8 w-8 ml-1" aria-hidden="true" />
            )}
          </Button>

          <Button
            onClick={toggleMute}
            variant="outline"
            size="lg"
            className="min-h-touch min-w-touch text-base"
            aria-label={isMuted ? 'Ativar som' : 'Desativar som'}
          >
            {isMuted ? (
              <VolumeX className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Volume2 className="h-6 w-6" aria-hidden="true" />
            )}
          </Button>
        </div>

        {/* Controle de Volume */}
        <div className="flex items-center gap-4">
          <VolumeX className="h-5 w-5 text-gray-500 flex-shrink-0" aria-hidden="true" />
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={volume}
            onChange={handleVolumeChange}
            className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
            aria-label="Controle de volume"
            aria-valuemin="0"
            aria-valuemax="1"
            aria-valuenow={volume}
            aria-valuetext={`Volume ${Math.round(volume * 100)}%`}
          />
          <Volume2 className="h-5 w-5 text-gray-500 flex-shrink-0" aria-hidden="true" />
        </div>

        {/* Instruções para Idosos */}
        <div className="text-sm text-gray-600 bg-white/70 rounded-lg p-4 border border-blue-200">
          <p className="font-semibold mb-2">💡 Como usar:</p>
          <ul className="space-y-1 text-base">
            <li>• Clique no botão <strong>▶ Reproduzir</strong> para ouvir</li>
            <li>• Use <strong>⟲ Reiniciar</strong> para voltar ao início</li>
            <li>• Clique em <strong>🔊 Download</strong> para salvar no seu celular</li>
          </ul>
        </div>
      </div>
    </Card>
  );
};

export default AudioPlayer;
