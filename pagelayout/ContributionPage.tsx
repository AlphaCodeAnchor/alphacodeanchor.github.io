'use client'
import MarkdownViewer from '@/components/MarkdownViewer';
import { useEffect, useState } from 'react';

export default function ContributionPage() {
    const [markdown, setMarkdown] = useState('');

    useEffect(() => {
        fetch('/contribution_guide.md')
            .then((res) => res.text())
            .then(setMarkdown)
            .catch(console.error);
    }, []);
    return (
        <MarkdownViewer markdownContent={markdown} />
    )
}