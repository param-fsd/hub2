import { Button, Spinner } from 'flowbite-react';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareAlt } from '@fortawesome/free-solid-svg-icons';
import CallToAction from '../components/CallToAction';
import CommentSection from '../components/CommentSection';
import PostCard from '../components/PostCard';
import { 
  faWhatsapp, 
  faFacebook, 
  faTwitter, 
  faLinkedin, 
  faPinterest, 
  faInstagram 
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Categories from '../components/Categery';

export default function PostPage() {
  const { postSlug } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [post, setPost] = useState(null);
  const [recentPosts, setRecentPosts] = useState(null);
  const [speechSynthesisInstance, setSpeechSynthesisInstance] = useState(null);
  const [showShareIcons, setShowShareIcons] = useState(false);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        const res = await fetch(`/api/post/getposts?slug=${postSlug}`);
        const data = await res.json();
        if (!res.ok) {
          setError(true);
          setLoading(false);
          return;
        }
        if (res.ok) {
          setPost(data.posts[0]);
          setLoading(false);
          setError(false);
        }
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchPost();
  }, [postSlug]);

  useEffect(() => {
    try {
      const fetchRecentPosts = async () => {
        const res = await fetch(`/api/post/getposts?limit=3`);
        const data = await res.json();
        if (res.ok) {
          setRecentPosts(data.posts);
        }
      };
      fetchRecentPosts();
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  useEffect(() => {
    const initSpeechSynthesis = () => {
      const speech = new SpeechSynthesisUtterance();
      speech.lang = 'kn-IN'; // Set language to Kannada
      setSpeechSynthesisInstance(speech);
    };

    initSpeechSynthesis();

    return () => {
      if (speechSynthesisInstance) {
        speechSynthesisInstance.onend = null;
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  // Utility function to strip HTML tags
  const stripHTML = (html) => {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = html;
    return tempDiv.textContent || tempDiv.innerText || '';
  };

  const startSpeech = () => {
    if (speechSynthesisInstance && post && post.content) {
      const kannadaContent = stripHTML(post.content); // Ensure post.content is in Kannada

      console.log('Kannada content:', kannadaContent); // Log content for debugging

      const utterance = new SpeechSynthesisUtterance();
      utterance.text = kannadaContent;
      utterance.lang = 'kn-IN'; // Set language to Kannada

      // Event listeners for error and end of speech
      utterance.onerror = (event) => {
        console.error('Speech synthesis error:', event.error);
      };

      utterance.onend = () => {
        console.log('Speech synthesis complete.');
      };

      // Start speech synthesis
      try {
        window.speechSynthesis.speak(utterance);
      } catch (error) {
        console.error('Speech synthesis error:', error);
      }
    }
  };

  const stopSpeech = () => {
    if (speechSynthesisInstance) {
      window.speechSynthesis.cancel();
    }
  };

  const handleShare = () => {
    setShowShareIcons(!showShareIcons);
  };

  const handleWhatsAppShare = () => {
    const url = `https://wa.me/?text=${encodeURIComponent(window.location.href)}`;
    window.open(url, '_blank');
  };

  const handleFacebookShare = () => {
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`;
    window.open(url, '_blank');
  };

  const handleTwitterShare = () => {
    const url = `https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(post.title)}`;
    window.open(url, '_blank');
  };

  const handleLinkedInShare = () => {
    const url = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(window.location.href)}&title=${encodeURIComponent(post.title)}`;
    window.open(url, '_blank');
  };

  const handlePinterestShare = () => {
    const url = `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(window.location.href)}&description=${encodeURIComponent(post.title)}`;
    window.open(url, '_blank');
  };

  const handleInstagramShare = () => {
    alert('Instagram does not support direct sharing via URL.');
  };

  const handleEmailShare = () => {
    const url = `mailto:?subject=${encodeURIComponent(post.title)}&body=${encodeURIComponent(window.location.href)}`;
    window.open(url, '_self');
  };

  if (loading) {
    return (
      <div className='flex justify-center items-center min-h-screen'>
        <Spinner size='xl' />
      </div>
    );
  }

  return (
    <main className='p-3 flex flex-col max-w-6xl mx-auto min-h-screen'>
      <Categories/>
      <h1 className='text-3xl mt-3 p-3 text-center font-serif max-w-2xl mx-auto lg:text-4xl'>
        {post && post.title}
      </h1>
      <Link
        to={`/search?category=${post && post.category}`}
        className='self-center mt-5'
      >
        <Button color='gray' pill size='xs'>
          {post && post.category}
        </Button>
      </Link>

      {/* Share Button */}
      <div className='flex justify-center my-5 mb-2 mt-2'>
        <Button color='gray' onClick={handleShare} className='flex items-center' pill size='xs'>
          <FontAwesomeIcon icon={faShareAlt} className='mr-2' />
          <span className='text-sm'>Share</span>
        </Button>
      </div>

      {showShareIcons && (
        <div className='flex justify-center space-x-4'>
          <FontAwesomeIcon icon={faWhatsapp} className='text-xl text-green-500' onClick={handleWhatsAppShare} />
          <FontAwesomeIcon icon={faFacebook} className='text-xl text-blue-600' onClick={handleFacebookShare} />
          <FontAwesomeIcon icon={faTwitter} className='text-xl text-blue-400' onClick={handleTwitterShare} />
          <FontAwesomeIcon icon={faLinkedin} className='text-xl text-blue-700' onClick={handleLinkedInShare} />
          <FontAwesomeIcon icon={faPinterest} className='text-xl text-red-600' onClick={handlePinterestShare} />
          <FontAwesomeIcon icon={faInstagram} className='text-xl text-pink-500' onClick={handleInstagramShare} />
          <FontAwesomeIcon icon={faEnvelope} className='text-xl text-gray-600' onClick={handleEmailShare} />
        </div>
      )}

      <img
        src={post && post.image}
        alt={post && post.title}
        className='mt-2 p-3 max-h-[600px] w-full object-cover'
      />

      <div className='flex justify-between p-3 border-b border-slate-500 mx-auto w-full max-w-2xl text-xs'>
        <span>{post && new Date(post.createdAt).toLocaleDateString()}</span>
        <span className='italic'>
          {post && (post.content.length / 1000).toFixed(0)} mins read
        </span>
      </div>
      <div className='flex flex-col items-center justify-center gap-2 mt-2'>
        <div className='flex justify-center items-center gap-2'>
          <h2>Speechout</h2>
          <Button
            color='primary'
            className='flex items-center gap-1'
            onClick={startSpeech}
          >
            <i className='fas fa-play'></i> 
          </Button>
          <Button
            color='red'
            className='flex items-center gap-1'
            onClick={stopSpeech}
          >
            <i className='fas fa-stop'></i> 
          </Button>
        </div>
      </div>
      <div
        className='p-3 max-w-2xl mx-auto w-full post-content'
        dangerouslySetInnerHTML={{ __html: post && post.content }}
      ></div>

      <div className='max-w-4xl mx-auto w-full mt-10'>
        <CallToAction />
      </div>
      <CommentSection postId={post._id} />

      <div className='flex flex-col justify-center items-center mb-5'>
        <h1 className='text-xl mt-5'>Recent articles</h1>
        <div className='flex flex-wrap gap-5 mt-5 justify-center'>
          {recentPosts &&
            recentPosts.map((post) => <PostCard key={post._id} post={post} />)}
        </div>
      </div>
    </main>
  );
}
