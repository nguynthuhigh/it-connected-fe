import React, { useState } from "react";

const ReviewForm: React.FC = () => {
  const [overallRating, setOverallRating] = useState<number | null>(null);
  const [overtimePolicy, setOvertimePolicy] = useState<string>("");
  const [reason, setReason] = useState<string>("");
  const [experiences, setExperiences] = useState<string>("");
  const [suggestions, setSuggestions] = useState<string>("");
  const [recommend, setRecommend] = useState<string>("");

  return (
    <div className="p-8 max-w-xl mx-auto bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Review MSB</h2>
      <p className="mb-4 text-gray-600">
        Your opinion will be very helpful for the Developer community who are looking for a job.
      </p>
      
      {/* Overall Rating */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">Overall rating *</label>
        <div className="flex space-x-2">
          {[1, 2, 3, 4, 5].map((rating) => (
            <button
              key={rating}
              className={`text-xl ${overallRating === rating ? "text-yellow-400" : "text-gray-400"}`}
              onClick={() => setOverallRating(rating)}
            >
              ★
            </button>
          ))}
        </div>
      </div>

      {/* Overtime Policy */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">How do you feel about the overtime policy? *</label>
        <div>
          <input
            type="radio"
            id="satisfied"
            value="Satisfied"
            checked={overtimePolicy === "Satisfied"}
            onChange={() => setOvertimePolicy("Satisfied")}
            className="mr-2"
          />
          <label htmlFor="satisfied" className="mr-4">Satisfied</label>
          <input
            type="radio"
            id="unsatisfied"
            value="Unsatisfied"
            checked={overtimePolicy === "Unsatisfied"}
            onChange={() => setOvertimePolicy("Unsatisfied")}
            className="mr-2"
          />
          <label htmlFor="unsatisfied">Unsatisfied</label>
        </div>
      </div>

      {/* Reason for Overtime Policy */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">Input your reason *</label>
        <textarea
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
          rows={3}
          placeholder="Input your reason"
          required
        ></textarea>
      </div>

      {/* Experiences */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">What makes you love working here *</label>
        <textarea
          value={experiences}
          onChange={(e) => setExperiences(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
          rows={4}
          placeholder="Input your experiences"
        ></textarea>
      </div>

      {/* Suggestions for Improvement */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">Suggestion for improvement *</label>
        <textarea
          value={suggestions}
          onChange={(e) => setSuggestions(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
          rows={4}
          placeholder="Input your suggestion"
        ></textarea>
      </div>

      {/* Rating Details */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">Rating detail *</label>
        <div className="space-y-2">
          {["Salary & benefits", "Training & learning", "Management cares", "Culture & fun", "Office & workspace"].map(
            (category) => (
              <div key={category} className="flex items-center">
                <span className="mr-4 w-1/3">{category}</span>
                {[1, 2, 3, 4, 5].map((star) => (
                  <button key={star} className="text-gray-400 text-xl">★</button>
                ))}
              </div>
            )
          )}
        </div>
      </div>

      {/* Recommendation */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">Do you want to recommend this company to your friends? *</label>
        <div>
          <input
            type="radio"
            id="yes"
            value="Yes"
            checked={recommend === "Yes"}
            onChange={() => setRecommend("Yes")}
            className="mr-2"
          />
          <label htmlFor="yes" className="mr-4">Yes</label>
          <input
            type="radio"
            id="no"
            value="No"
            checked={recommend === "No"}
            onChange={() => setRecommend("No")}
            className="mr-2"
          />
          <label htmlFor="no">No</label>
        </div>
      </div>

      {/* Submit Button */}
      <button
        className="w-full bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600"
        onClick={() => console.log("Submit form")}
      >
        Send Review
      </button>
    </div>
  );
};

export default ReviewForm;
