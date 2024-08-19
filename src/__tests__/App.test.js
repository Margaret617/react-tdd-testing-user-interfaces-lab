import { render, screen } from "@testing-library/react";
import App from "../App";

describe('App Component', () => {
  test("displays a top-level heading with the text `Hi, I'm _______`", () => {
    
    render(<App />);

    
    const topLevelHeading = screen.getByRole("heading", {
      name: /hi, i'm/i,
      exact: false,
      level: 1,
    });

    
    expect(topLevelHeading).toBeInTheDocument();
  });

  test('displays an image with alt text', () => {
    
    render(<App />);

    
    const profileImage = screen.getByAltText(/my photo/i);

    
    expect(profileImage).toBeInTheDocument();
    expect(profileImage).toHaveAttribute('src');
  });

  test('displays a second-level heading with the text About Me', () => {
    
    render(<App />);

    
    const aboutHeading = screen.getByRole('heading', {
      name: /about me/i,
      exact: true,
      level: 2,
    });

    // Assert
    expect(aboutHeading).toBeInTheDocument();
  });

  test('displays a paragraph with biography text', () => {
    // Arrange
    render(<App />);

    // Act
    const biographyParagraph = screen.getByText(/biography text/i);

    // Assert
    expect(biographyParagraph).toBeInTheDocument();
  });

  test('displays two links: one to GitHub and one to LinkedIn', () => {
    // Arrange
    render(<App />);

    // Act
    const githubLink = screen.getByRole('link', { name: /github/i });
    const linkedinLink = screen.getByRole('link', { name: /linkedin/i });

    // Assert
    expect(githubLink).toBeInTheDocument();
    expect(linkedinLink).toBeInTheDocument();
    expect(githubLink).toHaveAttribute('href', 'https://github.com/your-username');
    expect(linkedinLink).toHaveAttribute('href', 'https://linkedin.com/in/your-username');
  });
});
