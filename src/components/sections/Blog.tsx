import React from 'react';
import { Calendar, ArrowRight, BookOpen } from 'lucide-react';
import { Section } from '../ui/Section';
import { FadeIn } from '../ui/animations';
import { useLanguage } from '../../hooks/useLanguage';
import { useTranslations } from '../../translations';

export function Blog() {
  const { language } = useLanguage();
  const t = useTranslations(language);

  const blogPosts = [
    {
      title: t.blog.posts.gestalt.title,
      excerpt: t.blog.posts.gestalt.excerpt,
      date: t.blog.posts.gestalt.date,
      readTime: t.blog.posts.gestalt.readTime,
      category: t.blog.posts.gestalt.category
    },
    {
      title: t.blog.posts.trauma.title,
      excerpt: t.blog.posts.trauma.excerpt,
      date: t.blog.posts.trauma.date,
      readTime: t.blog.posts.trauma.readTime,
      category: t.blog.posts.trauma.category
    },
    {
      title: t.blog.posts.relationships.title,
      excerpt: t.blog.posts.relationships.excerpt,
      date: t.blog.posts.relationships.date,
      readTime: t.blog.posts.relationships.readTime,
      category: t.blog.posts.relationships.category
    }
  ];

  return (
    <Section id="straipsniai" background="light" className="bg-white">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="section-title">
              {t.blog.title}
            </h2>
            <p className="text-therapy-sand-600 text-lg max-w-2xl mx-auto">
              {t.blog.subtitle}
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <FadeIn key={index} delay={index * 0.2}>
              <article className="card hover-lift h-full flex flex-col">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-therapy-sage-100 text-therapy-sage-700 px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-serif text-therapy-sand-800 mb-3 flex-grow">
                  {post.title}
                </h3>
                
                <p className="text-therapy-sand-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-sm text-therapy-sand-500 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar size={16} />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <BookOpen size={16} />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                
                <button className="inline-flex items-center gap-2 text-therapy-sage-600 hover:text-therapy-sage-700 focus:text-therapy-sage-700 font-medium transition-colors duration-200 mt-auto">
                  {t.blog.readMore}
                  <ArrowRight size={16} />
                </button>
              </article>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.6}>
          <div className="text-center mt-12">
            <button className="inline-flex items-center justify-center gap-2 bg-therapy-sage-600 text-white px-6 py-3 rounded-sm hover:bg-therapy-sage-700 focus:bg-therapy-sage-700 transition-colors duration-200">
              {t.blog.viewAll}
              <ArrowRight size={20} />
            </button>
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}