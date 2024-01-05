package com.project.files.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Review {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer id;
	private String subject;
	private String body;
	private Float rating;
	private Integer productId;
	private Integer reviewedBy;
	private Boolean isApproved;

	public Review() {
		this.isApproved = false;
	}

	public Review(Integer id, String subject, String body, Float rating, Integer productId, Integer reviewedBy,
			Boolean isApproved) {
		this.id = id;
		this.subject = subject;
		this.body = body;
		this.rating = rating;
		this.productId = productId;
		this.reviewedBy = reviewedBy;
		this.isApproved = isApproved;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getSubject() {
		return subject;
	}

	public void setSubject(String subject) {
		this.subject = subject;
	}

	public String getBody() {
		return body;
	}

	public void setBody(String body) {
		this.body = body;
	}

	public Float getRating() {
		return rating;
	}

	public void setRating(Float rating) {
		this.rating = rating;
	}

	public Integer getProductId() {
		return productId;
	}

	public void setProductId(Integer productId) {
		this.productId = productId;
	}

	public Integer getReviewedBy() {
		return reviewedBy;
	}

	public void setReviewedBy(Integer reviewedBy) {
		this.reviewedBy = reviewedBy;
	}

	public Boolean getIsApproved() {
		return isApproved;
	}

	public void setIsApproved(Boolean isApproved) {
		this.isApproved = isApproved;
	}

	@Override
	public String toString() {
		return "Review [id=" + id + ", subject=" + subject + ", body=" + body + ", rating=" + rating + ", productId="
				+ productId + ", reviewedBy=" + reviewedBy + ", isApproved=" + isApproved + "]";
	}

}
