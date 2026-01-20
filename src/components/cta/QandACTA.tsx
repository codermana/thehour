export default function QandACTA() {
  return (
    <div className="bg-codermana-orange/10 dark:bg-codermana-orange/20 rounded-xl p-8 mb-8 border border-codermana-orange/30">
      <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">❓ Have Questions?</h2>
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        Questions about this session? Send them to us at{' '}
        <a href="mailto:thehour@codermana.com?subject=Question: eBPF 101" className="text-codermana-dark-orange hover:underline font-semibold">
          thehour@codermana.com
        </a>
      </p>
      <p className="text-gray-700 dark:text-gray-300">
        We'll answer your questions and may feature them in upcoming sessions!
      </p>
  </div>
  );
}
