import { Icon } from '@iconify/react';
import { useState } from 'react';
import { toast } from 'react-toastify';

interface ContactFormData {
  name: string;
  email: string;
  company: string;
  projectType: string;
  budget: string;
  message: string;
  timeline: string;
}

interface ContactFormProps {
  onSubmit?: (data: ContactFormData) => void;
  className?: string;
}

export const ContactForm = ({ onSubmit, className = '' }: ContactFormProps) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    company: '',
    projectType: '',
    budget: '',
    message: '',
    timeline: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const projectTypes = [
    'Web Application',
    'Mobile App',
    'E-commerce Site',
    'Portfolio/Landing Page',
    'API Development',
    'Database Design',
    'System Integration',
    'Consulting/Code Review',
    'Other',
  ];

  const budgetRanges = [
    '$5K - $10K',
    '$10K - $25K',
    '$25K - $50K',
    '$50K - $100K',
    '$100K+',
    'Hourly Rate',
    "Let's Discuss",
  ];

  const timelines = [
    'ASAP',
    '1-2 weeks',
    '1 month',
    '2-3 months',
    '3-6 months',
    '6+ months',
    'Flexible',
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Here you would typically send to your backend or email service
      // For now, we'll simulate the submission
      await new Promise((resolve) => setTimeout(resolve, 1000));

      if (onSubmit) {
        onSubmit(formData);
      }

      // Create mailto link with form data
      const subject = `Project Inquiry from ${formData.name}`;
      const body = `
Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company}
Project Type: ${formData.projectType}
Budget: ${formData.budget}
Timeline: ${formData.timeline}

Message:
${formData.message}
      `.trim();

      const mailtoLink = `mailto:devinobrien@icloud.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.open(mailtoLink);

      toast.success('Thank you! Your message has been sent.');

      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        projectType: '',
        budget: '',
        message: '',
        timeline: '',
      });
    } catch (error) {
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: keyof ContactFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className={`space-y-6 ${className}`}>
      <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
        {/* Name */}
        <div>
          <label
            htmlFor='name'
            className='mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300'
          >
            Full Name *
          </label>
          <input
            type='text'
            id='name'
            required
            value={formData.name}
            onChange={(e) => handleChange('name', e.target.value)}
            className='w-full rounded-lg border border-gray-300 px-4 py-3 transition-all focus:border-transparent focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-800 dark:text-white'
            placeholder='John Doe'
          />
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor='email'
            className='mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300'
          >
            Email Address *
          </label>
          <input
            type='email'
            id='email'
            required
            value={formData.email}
            onChange={(e) => handleChange('email', e.target.value)}
            className='w-full rounded-lg border border-gray-300 px-4 py-3 transition-all focus:border-transparent focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-800 dark:text-white'
            placeholder='john@company.com'
          />
        </div>

        {/* Company */}
        <div>
          <label
            htmlFor='company'
            className='mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300'
          >
            Company/Organization
          </label>
          <input
            type='text'
            id='company'
            value={formData.company}
            onChange={(e) => handleChange('company', e.target.value)}
            className='w-full rounded-lg border border-gray-300 px-4 py-3 transition-all focus:border-transparent focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-800 dark:text-white'
            placeholder='Acme Inc.'
          />
        </div>

        {/* Project Type */}
        <div>
          <label
            htmlFor='projectType'
            className='mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300'
          >
            Project Type *
          </label>
          <select
            id='projectType'
            required
            value={formData.projectType}
            onChange={(e) => handleChange('projectType', e.target.value)}
            className='w-full rounded-lg border border-gray-300 px-4 py-3 transition-all focus:border-transparent focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-800 dark:text-white'
          >
            <option value=''>Select a project type</option>
            {projectTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        {/* Budget */}
        <div>
          <label
            htmlFor='budget'
            className='mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300'
          >
            Budget Range
          </label>
          <select
            id='budget'
            value={formData.budget}
            onChange={(e) => handleChange('budget', e.target.value)}
            className='w-full rounded-lg border border-gray-300 px-4 py-3 transition-all focus:border-transparent focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-800 dark:text-white'
          >
            <option value=''>Select budget range</option>
            {budgetRanges.map((budget) => (
              <option key={budget} value={budget}>
                {budget}
              </option>
            ))}
          </select>
        </div>

        {/* Timeline */}
        <div>
          <label
            htmlFor='timeline'
            className='mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300'
          >
            Project Timeline
          </label>
          <select
            id='timeline'
            value={formData.timeline}
            onChange={(e) => handleChange('timeline', e.target.value)}
            className='w-full rounded-lg border border-gray-300 px-4 py-3 transition-all focus:border-transparent focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-800 dark:text-white'
          >
            <option value=''>Select timeline</option>
            {timelines.map((timeline) => (
              <option key={timeline} value={timeline}>
                {timeline}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor='message'
          className='mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300'
        >
          Project Details *
        </label>
        <textarea
          id='message'
          required
          rows={5}
          value={formData.message}
          onChange={(e) => handleChange('message', e.target.value)}
          className='resize-vertical w-full rounded-lg border border-gray-300 px-4 py-3 transition-all focus:border-transparent focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-800 dark:text-white'
          placeholder='Tell me about your project, goals, and any specific requirements...'
        />
      </div>

      {/* Submit Button */}
      <button
        type='submit'
        disabled={isSubmitting}
        className='flex w-full items-center justify-center gap-3 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-4 font-semibold text-white transition-all hover:scale-[1.02] hover:from-blue-700 hover:to-indigo-700 disabled:cursor-not-allowed disabled:opacity-50 dark:from-blue-600 dark:to-purple-600 dark:hover:from-blue-700 dark:hover:to-purple-700'
      >
        {isSubmitting ? (
          <>
            <Icon icon='eos-icons:loading' className='size-5 animate-spin' />
            Sending...
          </>
        ) : (
          <>
            <Icon icon='ph:paper-plane-tilt' className='size-5' />
            Send Project Inquiry
          </>
        )}
      </button>

      <p className='text-center text-sm text-gray-700 dark:text-gray-400'>
        I typically respond within 24 hours. For urgent inquiries, call{' '}
        <a href='tel:203-228-8579' className='text-blue-600 hover:underline'>
          (203) 228-8579
        </a>
      </p>
    </form>
  );
};
