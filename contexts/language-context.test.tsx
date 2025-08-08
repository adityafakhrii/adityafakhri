import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { LanguageProvider, useLanguage } from './language-context';

function TestComponent() {
  const { language, setLanguage, t } = useLanguage();
  return (
    <div>
      <span data-testid="current-language">{language}</span>
      <span data-testid="translated-text">{t('home')}</span>
      <button onClick={() => setLanguage('en')}>EN</button>
    </div>
  );
}

describe('LanguageProvider', () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.lang = '';
  });

  it('updates language and side effects', async () => {
    const user = userEvent.setup();
    render(
      <LanguageProvider>
        <TestComponent />
      </LanguageProvider>
    );

    // Default language should be Indonesian
    expect(document.documentElement.lang).toBe('id');
    expect(screen.getByTestId('translated-text')).toHaveTextContent('Beranda');

    // Change to English
    await user.click(screen.getByText('EN'));

    expect(localStorage.getItem('language')).toBe('en');
    expect(document.documentElement.lang).toBe('en');
    expect(screen.getByTestId('translated-text')).toHaveTextContent('Home');
  });
});
