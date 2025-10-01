import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield, BookOpen, HardDrive, GraduationCap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import TutorialViewer from '../components/TutorialViewer'; // Importa o componente de tutorial
import mockData from '../mock'; // Importa os dados

const TutorialSection = ({ tutorialId }) => {
    const [isOpen, setIsOpen] = useState(false);
    // Procura o tutorial específico no mockData importado
    const tutorial = mockData.tutorials.find(t => t.id === tutorialId);

    if (!tutorial) return null;

    return (
        <div className="mt-6">
            {!isOpen && (
                <div className="bg-blue-50 p-4 rounded-lg flex items-center justify-between border-2 border-dashed border-blue-200">
                    <div className="flex items-center">
                        <GraduationCap className="h-6 w-6 text-blue-600 mr-3" />
                        <p className="font-semibold">Quer aprender na prática? Veja o tutorial passo a passo.</p>
                    </div>
                    <Button onClick={() => setIsOpen(true)}>Mostrar Tutorial</Button>
                </div>
            )}
            {isOpen && <TutorialViewer tutorial={tutorial} />}
        </div>
    );
};

export const ProtectionContent = () => (
    <Card>
        <CardHeader><CardTitle className="flex items-center space-x-2"><Shield className="h-6 w-6 text-green-600" /><span>Métodos de Proteção</span></CardTitle></CardHeader>
        <CardContent>
            <p>Aprenda sobre ferramentas como antivírus e a importância de manter tudo atualizado.</p>
            <TutorialSection tutorialId={7} /> 
            <TutorialSection tutorialId={8} /> 
        </CardContent>
    </Card>
);

export const PasswordsContent = () => (
    <Card>
        <CardHeader><CardTitle className="flex items-center space-x-2"><BookOpen className="h-6 w-6 text-blue-600" /><span>Senhas Seguras</span></CardTitle></CardHeader>
        <CardContent>
            <p>Uma senha forte é sua primeira linha de defesa. Aprenda as regras para criar senhas difíceis de adivinhar.</p>
            <TutorialSection tutorialId={1} />
            <TutorialSection tutorialId={2} />
        </CardContent>
    </Card>
);

export const BackupContent = () => (
    <Card>
        <CardHeader><CardTitle className="flex items-center space-x-2"><HardDrive className="h-6 w-6 text-indigo-600" /><span>Backup de Arquivos</span></CardTitle></CardHeader>
        <CardContent>
            <p>Aprenda a importância de ter uma cópia de segurança (backup) de seus ficheiros e como fazer isso de forma simples.</p>
            <TutorialSection tutorialId={3} />
            <TutorialSection tutorialId={4} />
        </CardContent>
    </Card>
);

export default { ProtectionContent, PasswordsContent, BackupContent };