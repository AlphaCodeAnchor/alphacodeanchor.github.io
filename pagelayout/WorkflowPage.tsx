'use client';
import MarkdownViewer from '@/components/MarkdownViewer';
import { useEffect, useState } from 'react';

export default function WorkflowPage() {
    const [markdown, setMarkdown] = useState('');

    useEffect(() => {
        fetch('/dev_workflow.md')
            .then((res) => res.text())
            .then(setMarkdown)
            .catch(console.error);
    }, []);

    return (
        <MarkdownViewer markdownContent={markdown} />
    );
}
